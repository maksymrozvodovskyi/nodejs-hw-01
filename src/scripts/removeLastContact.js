import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.splice(-1, 1);
  } else {
    console.log('No contacts yet!');
  }
  await writeContacts(contacts);
};

removeLastContact();
