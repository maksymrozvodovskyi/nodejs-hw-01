import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    return contacts.length;
  } else {
    return 0;
  }
};

console.log(await countContacts());
