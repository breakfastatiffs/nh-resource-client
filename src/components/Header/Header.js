import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='main-header'>
        <div className='container'>
          <h1 className='main-title'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              Altergencies:
              </Link>
          </h1>
          <p className='main-subtitle'>For Alternative Emergencies</p>
          <nav>
            <ul className='main-nav-list'>
              <li id='nav-li'>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                  About
              </Link>
              </li>
              <span>━</span>
              <li id='nav-li'>
                <Link to='/add-resource' style={{ textDecoration: 'none' }}>
                  Add Resource
              </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}