import React from "react"
import './Footer.css';

class NavBar extends React.Component {
   render(){
   return(
    <footer className="footer">
      <a href="https://lindnerdesign.github.io">Lindsay Lindner Portfolio 2018</a> | <a href="https://github.com/lindnerdesign/clicky-game"><i class="fab fa-github"></i> Github Repo</a> | {new Date().toLocaleTimeString()}
    </footer>
   );
  }
}
export default NavBar;