import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function CounterApp() {


  const dispatch = useDispatch()
  const count = useSelector(state => state.counterReducer.count)
  const[amount,setAmount]=useState(0)
  const handleIncrementByAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(amount))
    }
    else{
      alert("Enter a valid amount")
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ height: '100%' }}>

          <Card.Body>
            <Card.Title className='text-center'>Counter App</Card.Title>
            <Card.Text className='text-center' >
              <h6 style={{ fontSize: '40px' }}>{count}</h6>
            </Card.Text>
            <Button variant="warning" className='me-3 ' onClick={() => dispatch(decrement())}>Decrement</Button>
            <Button variant="danger" className='me-3' onClick={() => dispatch(reset())}>Reset</Button>
            <Button variant="success" onClick={() => dispatch(increment())}>Increment</Button>

            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">

              <Form.Control type="email" placeholder="Enter the amount to be incremented" onChange={e=>setAmount(e.target.value)}/>
              <div className="mt-2 text-center">
                <Button className='text-center' onClick={handleIncrementByAmount}> Increment by amount</Button>
              </div>

            </Form.Group>
          </Card.Body>
        </Card>
      </div>

    </>
  )
}

export default CounterApp