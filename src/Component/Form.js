import React from 'react'
import {useState} from "react"
import axios from 'axios'
function EmployeData() {
const [post, setPost] = useState({
  FirstName:"",
  LastName:"",
  BirthDate:"",
  Email:"",
  Phone:"",
  Company:"",
  Country:"",
  Mailling_Address:"",
  Comment:"",
  Current_Date:""
})
function createPost(e) {
  e.preventDefault();
  console.log(post,"post");
  axios
    .post("https://sanjnapanwar.github.io/HACKATHON_Responsive/", 
      {
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(post)
    })
    .then((response) => {
      setPost(response.post);
      console.log(response.post)
      alert("data is submitted")
    });
}

  return (
    <>
    <form className='form' onSubmit={createPost}>
    <h1>ADD/EDIT EMPLOYE</h1>
      <label>FirstName:
        <input className='Box'
          type="text" 
          onChange={(e)=>{
            setPost({
              ...post,
              FirstName:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> LastName:
        <input className='Box'
          type="text" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              LastName:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Company:
        <input className='Box'
          type="text" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Company:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> BirthDate:
        <input className='Box'
          type="date" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              BirthDate:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Email:
        <input className='Box'
          type="email" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Email:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Phone:
        <input className='Box'
          type="number" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Phone:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Company:
        <input className='Box'
          type="text" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Company :e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Mailling_Address:
        <input className='Box'
          type="text" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Mailling_Address :e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Comment:
        <input className='Box'
          type="comment" 
          
          onChange={(e)=>{
            setPost({
              ...post,
              Comment:e.target.value
            });
    
          }} 
        />
      </label>
      <br/>
      <label> Current_Date:
        <input className='Box'
          type="date" 
          onChange={(e)=>{
            setPost({
              ...post,
              Current_Date:e.target.value
            });
          }} 
        />
      </label>
      <br/>
      <button type="submit" className='btn'> Submit</button>

    </form>
 
    </>
  )
}export default EmployeData