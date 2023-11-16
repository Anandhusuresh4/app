import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { addUser } from './userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'





function Create() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const [occupation,setOccupation]=useState('')

 
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1 , name , email,age,occupation}))
        navigate('/')
    }
  return (
    
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-dark text-white p-5'>
        <h3>Fill the data</h3>

            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Name'
                onChange={e=>setName(e.target.value)} />
                <br></br>
                
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" className='form-control' placeholder='Enter Email' 
                    onChange={e=>setEmail(e.target.value)}/>

                    
                </div><br />

                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" className='form-control' placeholder='Enter Age' 
                    onChange={e=>setAge(e.target.value)}/>
                    </div>
<br></br>
<div>
                    <label htmlFor="occupation">Occupation:</label>
                    <input type="text" name="occupation" className='form-control' placeholder='Enter Occupation' 
                    onChange={e=>setOccupation(e.target.value)}/>

                    
                </div><br />
                
                <Button onClick={handleSubmit} className='btn btn-danger'>Submit</Button>
            </form>
        </div>
    </div>
  )
}

export default Create