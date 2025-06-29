import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  if (contacts > 0) {
    const count = contacts.length;
    return count;
  } else {
    console.log('No contacts yet!');
  }
};

console.log(await countContacts());
