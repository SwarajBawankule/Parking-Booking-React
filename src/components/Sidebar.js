// src/components/Sidebar.js

import React from 'react';
import './Sidebar.css'; // Import any styles if needed

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div id="sideNav" className={this.state.isOpen ? 'open' : ''}>
        <button onClick={this.toggleSidebar}>
          {this.state.isOpen ? 'Close' : 'Open'} Sidebar
        </button>
        <nav>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#feature">FEATURES</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#about-us">ABOUT US</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
