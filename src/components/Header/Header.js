import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='Header'>
          <h1>
            <Link to='/' style={{ textDecoration: 'none' }}>
              Altergencies
              </Link>
          </h1>
          <p>For Alternative Emergencies</p>
        </div>
        <nav>
          <ul className='navUL'>
          <li id='navLI'>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            About
          </Link>
            </li>
            <li id='navLI'>
          <Link to='/add' style={{ textDecoration: 'none' }}>
            Add Resource
          </Link>
            </li>
        </ul>
        </nav>
      </header>
    )
  }
}