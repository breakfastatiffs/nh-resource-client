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
          <li class="sub-menu-parent" tab-index="0">
          <Link to='/about'>About</Link>
            </li>
            <li class="sub-menu-parent" tab-index="0">
          <Link to='/add-resource'>Add Resource</Link>
            </li>
          <li class="sub-menu-parent" tab-index="0">
            <a>Search By County</a>
            <ul class='sub-menu'>
              <Link to=''>Belkap County</Link>
              <Link to=''>Carroll County</Link>
              <Link to=''>Cheshire County</Link>
              <Link to=''>Coos County</Link>
              <Link to=''>Grafton County</Link>
              <Link to=''>Hillsborough County</Link>
              <Link to=''>Merrimack County</Link>
              <Link to=''>Rockingham County</Link>
              <Link to=''>Strafford County</Link>
            </ul>
          </li>
        </ul>
        </nav>
      </header>
    )
  }
}