import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = JSON.stringify([]);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
