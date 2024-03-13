import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
