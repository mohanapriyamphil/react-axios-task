import Axios from "axios"
import { useState } from "react"
import { URL } from "../Constants/API_URL"
import { useNavigate } from "react-router-dom"
import '../App.css'


const Create = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    await Axios.post(URL, {
      name,
      username,
      email
    })
    navigate('/read')
  }
  
  return (
    <div className="crud">
      
      <form className="addForm">
        <h3>Create User</h3>
        <label htmlFor="name">Name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name"/><br/>
        <label htmlFor="username">Username: </label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username"/><br/>
        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email Id"/><br/>
        <span>
          <button type="submit" onClick={handleClick}>Add</button>
        </span>
        
      </form>
    </div>
  )
}

export default Create