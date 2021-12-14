const fs = require("fs/promises");
const path = require("path");

const { v4 } = require("uuid");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function listContacts() {
  
  const contacts = await getContactsFromFile();
  console.table(contacts);
}

async function getContactById(contactId) {

  const contacts = await getContactsFromFile();
  // console.log(contacts)
  const contact = contacts.find((contact) => contact.id === contactId);
  // console.log(contact)
  if (contact) {
    console.table(contact);
  } else {
    console.log("No contact was found.");
  }
}

async function removeContact(contactId) {
 
  const contacts = await getContactsFromFile();
  console.log(contacts)
  await saveContactsToFile(contacts.filter((contact) => contact.id !== contactId));
  listContacts();
  
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) {
    console.log("Name, email and phone are required.");
    return;
  }

  const contacts = await getContactsFromFile();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await saveContactsToFile(contacts);
  listContacts();
}

async function getContactsFromFile() {
  try {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
  } catch (error) {
    console.error("Error occured: ", error);
  }
}

async function saveContactsToFile(contacts) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf8");
  } catch (error) {
    console.error("Error occured: ", error);
  }
}



module.exports = { listContacts, getContactById, removeContact, addContact };