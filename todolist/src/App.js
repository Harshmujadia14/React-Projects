// import logo from './logo.svg';
import './App.css';
import React, { useState, Fragment } from "react";
import Row1 from './Components/Row1';
import Delete from './Components/Delete';
import jsonData from "./r.json";




function App() {
  const [contacts, setContacts] = useState(jsonData);
  const [addFormData, setAddFormData] = useState({
    id: '',
    task: '',
    description: '',
  });
  const [editFormData, setEditFormData] = useState({
    id: '',
    task: '',
    description: '',
  });


  const [editContactId, setEditContactid] = useState(null);
  
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(editFormData);
  };


  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    
    const newContact = {
      id: addFormData.id,
      task: addFormData.task,
      description: addFormData.description,
    };

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
  };


  const handleEditFormSubmit = (e) => {
    e.preventDefault();


    const editedContact = {
      id: editFormData.id,
      task: editFormData.task,
      description: editFormData.description

    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactid(null)
  };




  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactid(contact.id);


    const formValues = {
      id: contact.id,
      task: contact.task,
      description: contact.description,
    };
    setEditFormData(formValues)
  };
  const handleCancelClick = () => {
    setEditContactid(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


 
  return (
    <div className='app-container' >
      <form onSubmit={handleEditFormSubmit}>
      <table className="xyz">
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              {editContactId === contact.id ? (
                <Delete editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange} 
                  handleCancelClick={handleCancelClick}
                  />
              ) : (

                <Row1 contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick} />


              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>

      <div>
        <h2> Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          {/* <h2>ADD TASK{addRows}</h2> */}
          <label>id</label>
          <input type="number" name="id" placeholder="enter your id" onChange={handleAddFormChange} />
          <label>Task</label><br />
          <input type="text" name="task" placeholder="enter your task" onChange={handleAddFormChange} />
          <label>Discription</label><br />
          <textarea id="description" name="description" placeholder='enter description' rows="4" cols="50" onChange={handleAddFormChange}></textarea>
          <button type="submit">Add </button>
        </form>
        </div>
     
      </div>

    
  )
}
export default App;





