import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts, selectNameFilter } from "../../redux/selector";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

// ТУТ ВСЕ ДОБРЕ//
