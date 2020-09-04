import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render () {
    return (
        <div className='Header'>
          <h1>
              <Link to='/' style={{textDecoration:'none'}}>
                Altergencies
              </Link>
          </h1>
          <p>For Alternative Emergencies</p>
        </div>
    )
  }
}