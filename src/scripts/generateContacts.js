import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  for (let index = 0; index < number; index++) {
    const contacts = createFakeContact();
    const array = await readContacts();
    array.push(contacts);
    writeContacts(array);
  }
};

generateContacts(5);
