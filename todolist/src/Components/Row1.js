import React from "react"

const Row1 =({contact,handleEditClick,handleDeleteClick})=>{
return(
    <tr> 

              <td>{contact.id}</td>

              <td>{contact.task}</td>

              <td>{contact.description}</td>
              <td>
                  <button type="button" 
                  onClick={(e)=> handleEditClick(e,contact)}>Edit</button>
               <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete</button>
              </td>


            </tr>
    
);
}; 

export default Row1;