import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { URL } from "../Constants/API_URL";
import { useNavigate } from "react-router-dom"
// import Create from "./Components/Create.jsx";

const Read = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const updateUser = ({ name, username, email, id }) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    navigate('/update')
  }

  const deleteUser = async (id) => {
    await Axios.delete(URL + id)
    getAllUsers()
  }

  const getAllUsers = async () => {
    const res = await Axios.get(URL);
    setUsers(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="crud">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit" onClick={() => updateUser(user)}>Edit</button>
                <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default Read;
