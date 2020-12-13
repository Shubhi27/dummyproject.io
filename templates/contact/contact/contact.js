import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const contact=()=>{
    return(
        <div>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
<div className="container2">
<p className="para2"> @dummy-project</p>
</div>
<style>{`
Form{
    margin:5rem 5rem 5rem 5rem;
}
.container2{
    margin-top:16.5rem;
    background:black;
}
.para2{
    text-align:center;
    color:white;
}

`}
</style>
        </div>
    )
}
export default contact;