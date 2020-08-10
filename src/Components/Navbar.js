import React, { Component } from 'react';

class Navbar extends React.Component {
  state = {
    activeClass: 'top',
  }

  onScroll = () => {
    const newClass = window.scrollY === 0 ? 'top' : 'normal';
    if(newClass !== this.state.activeClass) {
      this.setState({ activeClass: newClass })
    }
  }
    
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
     
      <header className={this.state.activeClass}>
          <a href="#" className="logo">Logo</a>
          <ul className="NavList">
            <li className="NavItem"><a className="NavLink" href="#">Home</a></li>
            <li className="NavItem"><a className="NavLink" href="#">About</a></li>
            <li className="NavItem"><a className="NavLink" href="#">Services</a></li>
            <li className="NavItem"><a className="NavLink"href="#">Contact</a></li>
          </ul>
      </header>
    );
  }
}

export default Navbar;