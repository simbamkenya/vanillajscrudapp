//contacts 
const contacts = [
    {name: "Kihenjo", phoneNo : "0708894876"},
    {name: "Harry", phoneNo : "0798657243"}
];

//selecting div
const mainDiv = document.querySelector("main");


//inputs 
inputName = document.querySelector('input[name="name"]');
inputPhoneNo = document.querySelector('input[name="phoneNo"]');
createButton = document.querySelector("button#createcontact");


//update contact inputs
updateName = document.querySelector('input[name="updateName"]');
updatePhoneNo = document.querySelector('input[name="updatePhoneNo"]');
updateFormButton = document.querySelector("button#updatecontact");
//render contacts
const renderContacts = ()=>{

//empty div
mainDiv.innerHTML = "";

//listing contact list
// for(contact of contacts){
//    const contacth4 = document.createElement("h4");
//    contacth4.innerText = `${contact.name} phone number is ${contact.phoneNo}`;
//    mainDiv.appendChild(contacth4);
// }
contacts.forEach((contact, index) => {
    const contacth4 = document.createElement("h4");
    const buttonContainer = document.createElement("aside");


    //Delete button
    const deleteButton = document.createElement(`button`);
    deleteButton.id = index;
    deleteButton.innerText = "Deletee";
    deleteButton.addEventListener("click", event=>{
        contacts.splice(index,1);
        renderContacts();
    });
    buttonContainer.appendChild(deleteButton);


    //Update button
    const updateButton = document.createElement(`button`);
    updateButton.id = index;
    updateButton.innerText = "Update";
    updateButton.addEventListener("click", event=>{
        updateName.value = contact.name;
        updatePhoneNo.value = contact.phoneNo;
        updateFormButton.setAttribute("toupdate", index);
    });

    buttonContainer.appendChild(updateButton);

   contacth4.innerText = `${contact.name} phone number is ${contact.phoneNo}`;
   mainDiv.appendChild(contacth4);
   mainDiv.appendChild(buttonContainer);


});

}



//create new contact
const createContact = ()=>{
const name = inputName.value;
const phoneNo = inputPhoneNo.value;

const newContact = {name, phoneNo}
contacts.push(newContact);
renderContacts();
}

const updateContact = event => {
    const index = event.target.getAttribute("toupdate");
    const name = updateName.value;
    const phoneNo = updatePhoneNo.value;

    contacts[index] = {name, phoneNo}
    renderContacts();

}
renderContacts();
createButton.addEventListener("click", createContact);
updateFormButton.addEventListener("click", updateContact );

