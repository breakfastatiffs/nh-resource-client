import React from 'react';
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li class="sub-menu-parent" tab-index="0">
            <a href="#">Register</a>
          </li>
          <li class="sub-menu-parent" tab-index="0">
          <a href="#">Login</a>
            </li>
          <li class="sub-menu-parent" tab-index="0">
          <a href="#">About</a>
            </li>
          <li class="sub-menu-parent" tab-index="0">
            <a>Search By County</a>
            <ul class='sub-menu'>
              <li href="#">Belkap County</li>
              <li href="#">Carroll County</li>
              <li href="#">Cheshire County</li>
              <li href="#">Coos County</li>
              <li href="#">Grafton County</li>
              <li href="#">Hillsborough County</li>
              <li href="#">Merrimack County</li>
              <li href="#">Rockingham County</li>
              <li href="#">Strafford County</li>
            </ul>
          </li>
        </ul>
      </nav >
    )
  }
}