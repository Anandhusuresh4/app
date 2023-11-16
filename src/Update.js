import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userReducer';

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id == id)[0];
  const { name, email,age,occupation } = existingUser;
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [uage, setAge] = useState(age);
  const [uoccupation, setOccupation] = useState(occupation);


  const dispatch =useDispatch()
  const navigate=useNavigate()

  const handleUpdate =(event)=>{
    event.preventDefault()
    dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail,
        age:uage,
        occupation:uoccupation
    }))
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update Users</h3>
        <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              value={uname} onChange={e=>setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              value={uemail} onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <br />

          <div>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              name='age'
              className='form-control'
              placeholder='Enter Age'
              value={uage} onChange={e=>setAge(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='occupation'>Occupation:</label>
            <input
              type='text'
              name='occupation'
              className='form-control'
              placeholder='Enter Occupation'
              value={uage} onChange={e=>setOccupation(e.target.value)}
            />
          </div>
          <br></br>
          <Button onClick={handleUpdate} className='btn btn-info'>Update</Button>
        </form>
      </div>
    </div>
  );
}

export default Update;
