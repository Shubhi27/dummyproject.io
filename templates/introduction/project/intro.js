import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const intro=()=>{
    return(
        <div class="container1">
        <Row>
       <Col className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
       <Col>
       <img className="pic1" src="https://cdn0.iconfinder.com/data/icons/deisgn-and-development-4/64/vector_615_05-512.png"  alt="dummmy" /> 
       
       </Col>
       </Row>
       <style>{`
       .container1{
          margin : 3rem 3rem 3rem 3rem
       }
      .pic1{
         width:80%;
         height:auto;
       margin-top:"5rem"
       margin-left:"5rem"
       }
       .para1{
           margin:6rem 3rem 0 3rem;
           line-height:4rem;
           text-align:center;
       }
       `}
       </style>
        </div>
    )
}
export default intro;