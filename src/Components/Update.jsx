import Axios from 'axios'
import { URL } from '../Constants/API_URL'
import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const updateUser = async (e) => {
    e.preventDefault()
    await Axios.put(URL + id, {
      name,
      username,
      email
    })
    navigate('/read')
  }

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setUsername(localStorage.getItem('username'));
    setEmail(localStorage.getItem('email'));
  }, [])
  return (
    <div className='crud'>
      <form className="addForm">
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name"/>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username"/>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email Id"/>
        <button onClick={updateUser}>Submit</button>
      </form>
    </div>
  )
}

export default Update