import { ContactsCollection } from "../db/models/contact";

export const getAllContacts = async () => {
  const students = await ContactsCollection.find();
  return students;
};

export const getContactById = async (contactId) => {
  const student = await ContactsCollection.findById(contactId);
  return student;
};