import React from 'react';
import All from '../All/All';
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li class='sub-menu-parent'>
            <p>Search By County</p>
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
        <All />
      </nav >
    )
  }
}