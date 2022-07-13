import React from "react";
const Delete=({editFormData,handleEditFormChange,handleCancelClick,})=>{
    return(
        <tr>
            <td>
                <input type= "number" value={editFormData.id} placeholder="Enter Id"required="require" name="id" onChange={handleEditFormChange}></input>
            </td>
            <td>  <input type= "text" value={editFormData.task} placeholder="Enter Task"required="require" name="task" onChange={handleEditFormChange}></input></td>
            <td>  <input type= "text" value={editFormData.discription} placeholder="Enter Discription"required="require" name="description" onChange={handleEditFormChange}></input></td>
          <td>
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
          </td>
        </tr>
    )
}
export default Delete;