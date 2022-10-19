import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    const response = await fetch(
      "https://contact-list-3a138-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data, "This is from add contact handler");
    const contactToBeAdded = { id: data.name, ...contact };
    setContacts([...contacts, contactToBeAdded]);
  };

  const removeContactHandler = (id) => {
    const updatedContactList = contacts.filter((contact) => contact.id !== id);
    console.log(updatedContactList);
    setContacts(updatedContactList);
  };

  useEffect(() => {
    let data;
    const fetchData = async () => {
      const response = await fetch(
        "https://contact-list-3a138-default-rtdb.firebaseio.com/contacts.json"
      );
      // if (response.ok) console.log("Everything ok");
      data = await response.json();
      // console.log(data);
      const loadedContacts = [];
      for (const key in data) {
        loadedContacts.push({
          id: key,
          name: data[key].name,
          email: data[key].email,
        });
      }
      console.log(loadedContacts);
      setContacts(loadedContacts);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
