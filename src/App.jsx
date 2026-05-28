import React, { useRef, useState } from 'react'

export default function App() {
 
  const nameref=useRef()
  const passref=useRef()

const name ="admin"
const password="Admin@1"

function handleSbumit(){

if(nameref.current.value==name && passref.current.value== password){
  alert("login successfull")
}
else{
alert("invalid credentials")
}
}



  return (
    <div>
<form action="" onSubmit={handleSbumit} >
  <input type="text" ref={nameref} placeholder='enter your username' />
  <input type="password" ref={passref} placeholder='enter your password' />
  <button type='submit' >submit</button>
  
</form>


    </div>
  )
}
