import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  for (let index = 0; index <= number; index++) {
    writeContacts(createFakeContact());
  }
};

generateContacts(5);
