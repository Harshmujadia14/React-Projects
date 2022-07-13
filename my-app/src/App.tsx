import { useState } from 'react';
import React from "react";
import { useForm } from 'react-hook-form';
//import useForm from "react-hook-form";
import './App.css';

function App  ()  {
  
 
  // const onSubmit = (data) => {
  //   data.preventDefault()

  //   console.log(data)
  
  const [values, setvalues] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
    ConfirmPassword: "",
  });



 const [submitted, setsubmitted] = useState(false)


  const handleFirstNameInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalues({ ...values, FirstName: e.target.value })
  }
  const handleLastNameInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalues({ ...values, LastName: e.target.value })
  }
  const handleEmailAddressInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalues({ ...values, EmailAddress: e.target.value })
  }
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalues({ ...values, Password: e.target.value })
  }
  const handleConfirmPasswordInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalues({ ...values, ConfirmPassword: e.target.value })
  }
  
    console.log(handleSubmit)

    setrecords([...records]);
    console.log(records);
  
  return (
    <div className="App-header">
      {submitted ? <div className='Success Messege'>success! Youre Form submitted'</div> : null} 




      <form onSubmit={handleSubmit}>
       

          <h1>Signup</h1>
          <label htmlFor="">First Name</label>
          <br /><input type="text" name="FirstName" value={FirstName} placeholder='Name' onChange={(e) => setsubmitted({Firstname:e.target.value})} />
          <br /><label htmlFor="">Last Name</label>
          <br /> <input type="Text" name="LastName" value={LastName} placeholder='Last Name'onChange={(e) => setsubmitted({LastName:e.target.value})} />
          <br /><label htmlFor="">Email Address</label>
          <br /><input type="Text" name="EmailAddress" value={EmailAddress} placeholder='Email Address' onChange={(e) => setsubmitted({EmailaAddress:e.target.value})}/>
          <br /><label htmlFor="">Password</label>
          <br /><input type="password" name="Password" value={Password} placeholder='Enter password'onChange={(e) => setsubmitted({Password:e.target.value})} />
          <br /><label htmlFor="">Confirm Password</label>
          <br /><input type="password" name="confirmPassword" value={ConfirmPassword} placeholder='Enter confirm password'onChange={(e) => setsubmitted({ConfirmPaaword:e.target.value})} />

          <br /><button type="submit" >Submit</button>



          {/* <div>
        <label htmlFor="">Gender
          <input type="radio" value="Male" defaultChecked name="gender" />Male
          <input type="radio" value="Female" name="gender" />Female

        </label>
      </div>
      <div>
        <label htmlFor=''>Hobby:
          <input type="checkbox" value="Cricket" defaultChecked name="Hobby" />Cricket
          <input type="checkbox" value="Badminton" name="Hobby" />Badminton
          <input type="checkbox" value="Vollyball" name="Hobby" />Vollyball */}
         </form>
        </div>

     
    




    // </div>
    //</div>



    /* <button onClick={function (){ }}>submit </button>
    function myFunction() {
console.log("formup").submit();
} */









  );
}
  







export default App







