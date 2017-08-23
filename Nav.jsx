import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  handleSelect(selectedKey) {

  }

  render(){
    return (
      <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/about">About</Link>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBar;
