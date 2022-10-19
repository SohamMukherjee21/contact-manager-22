import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  //   console.log(props);
  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      clickHandler={deleteContactHandler}
    />
  ));
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
