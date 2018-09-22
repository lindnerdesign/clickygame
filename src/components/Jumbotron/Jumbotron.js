import React from "react"
import { Jumbotron } from "react-bootstrap";
import './JumbotronStyle.css';
import title from './title.png'

class Header extends React.Component {
   render(){
   return(
    <Jumbotron className="Jumbotron">
      <img src= {title} className="header-one"></img>
    </Jumbotron>
   );
  }
}
export default Header;