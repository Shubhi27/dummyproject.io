import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card"


  const about=()=>{
      return(
     <div className="container"> 
     <p className="heading">About</p>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/coding-7/100/macbook-typing-3-coding-software-development-programming-scripting-laptop-macbook-hand-512.png" />
    <Card.Body>
      <Card.Title>Project 1</Card.Title>
      <Card.Text>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
       quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, 
       
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">@dummy-project</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Smartphone-Qrcode-512.png" />
    <Card.Body>
      <Card.Title>Project 2</Card.Title>
      <Card.Text>
      aspernatur 
      aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">@dummy-project</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/coding-8/100/module-hand-1-coding-software-development-programming-3d-cube-hand-module-512.png" />
    <Card.Body>
      <Card.Title>Project 3</Card.Title>
      <Card.Text>
      dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut 
      labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">@dummy-project</small>
    </Card.Footer>
  </Card>
</CardGroup>
 <style>{`
.container{
    margin:25px 0 0 0;
} 
.heading{
    text-align: center;
    font-size:3rem;
    font-weight:bold;
}

 `}</style>
</div>
 

      );
  };
  export default about;