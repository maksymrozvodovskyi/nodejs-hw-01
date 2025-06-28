import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.appendFile(PATH_DB, updatedContacts, 'utf-8');
    console.log('File updated!');
  } catch (error) {
    console.log(error);
  }
};
