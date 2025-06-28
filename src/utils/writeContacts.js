import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    let contact = JSON.stringify(updatedContacts); // з обєкту в стрічку
    console.log('String', contact);
    JSON.parse(contact); // з стрічки на обєкт
    console.log('Parse', contact);
    // await fs.appendFile(PATH_DB, array, 'utf-8');
    console.log('File updated!');
  } catch (error) {
    console.log(error);
  }
};
