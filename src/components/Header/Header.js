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
          <ul>
          <li className="sub-menu-parent" tab-index="0">
          <Link to='/about'>About</Link>
            </li>
            <li className="sub-menu-parent" tab-index="0">
          <Link to='/add'>Add Resource</Link>
            </li>
        </ul>
        </nav>
      </header>
    )
  }
}