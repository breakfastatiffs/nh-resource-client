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
              <Link to='/about' style={{ textDecoration: 'none' }}>
                About
              </Link>
                <Link to='/add-resource' style={{ textDecoration: 'none' }}>
                Add
              </Link>
          </nav>
        </div>
      </header>
    )
  }
}