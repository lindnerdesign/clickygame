import React from "react"
import { Jumbotron } from "react-bootstrap";
import './JumbotronStyle.css';

class Header extends React.Component {
   render(){
   return(
    <Jumbotron className="Jumbotron">
      <img src="/images/title.png" className="header-one"></img>
    </Jumbotron>
   );
  }
}
export default Header;