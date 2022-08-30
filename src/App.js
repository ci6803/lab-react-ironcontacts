import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

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
          </tr>
        </thead>
        <tbody>
          {contact.map((celeb) => (
            <tr>
              <td>
                <img src={celeb.pictureUrl} alt="" />
              </td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity}</td>
              <td>{celeb.wonOscar ? "🏆" : ""}</td>
              <td>{celeb.wonEmmy ? "🏆" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
