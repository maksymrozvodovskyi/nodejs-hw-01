import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.splice(-1, 1);
  } else {
    console.log('Contacts are less than 1');
    return;
  }
  await writeContacts(contacts);
};

removeLastContact();
