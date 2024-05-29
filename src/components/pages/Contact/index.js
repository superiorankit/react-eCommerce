import React, { useState } from 'react'
import "./contact.css"


const Contact = () => {

  const [data,setData] = useState({email:"",message:""})


  const handleInput = (e)=>{

    const name = e.target.name;
    const value = e.target.value;

    setData({...data,[name]:value})
  }

  const submit = (e)=>{
    e.preventDefault();
    console.log(data);
  }





  return (
    <div className='contactMain'>
      <h1>Contact Us</h1>
      <div className='formBox'>
    <form onSubmit={(e)=>{submit(e)}}>
  <div class="mb-3 field">
    <label for="exampleInputEmail1" class="form-label">Email address:</label>
    <input type="email" name='email' value={data.email} onChange={(e)=>handleInput(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 field">
    <label for="exampleInputPassword1" class="form-label">Message:</label>
    <textarea type="password" name='message' value={data.message} onChange={(e)=>handleInput(e)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </div>
  )
}

export default Contact
