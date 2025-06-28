import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, undefined, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('File updated!');
  } catch (error) {
    console.log(error);
  }
};
