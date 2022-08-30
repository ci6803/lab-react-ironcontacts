import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const firstFive = allContacts.slice(0, 5);

function App() {
  const [contact, setContact] = useState(firstFive);

  const randomContact = () => {
    let random = Math.floor(Math.random() * allContacts.length);
    setContact([...contact, allContacts[random]]);
  };

  const sortByPopularity = () => {
    let sorted = contact.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));
    setContact([...contact, sorted]);
  };

  const sortByName = () => {
    let sorted = contact.sort((a, b) => (a.name > b.name ? 1 : -1));
    setContact([...contact, sorted]);
  };

  const deleteContact = (contactId) => {
    const filteredContact = contact.filter((contact) => {
      return contact.id !== contactId;
    });
    setContact(filteredContact);
  };

  return (
    <div className="App">
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map(
            ({ name, popularity, pictureUrl, wonOscar, wonEmmy, id }) => (
              <tr>
                <td>
                  <img className="image" src={pictureUrl} alt="{name}" />
                </td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar ? "🏆" : ""}</td>
                <td>{wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => deleteContact(id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;
