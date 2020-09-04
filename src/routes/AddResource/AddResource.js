import React from 'react';

export default class AddResource extends React.Component {
  render() {
    return (
        <form id="add-new">
          <label htmlfor="title">Business Name:</label>
          <input id="title" type="text" />
          <br/>
          <label htmlfor="number">Phone Number:</label>
          <input id="number" type="text" />
          <br/>
          <label htmlfor="url">Website:</label>
          <input id="url" type="text" />
          <br/>
          <label htmlfor="address">Street Address:</label>
          <input class="address" type="text" />
          <br/>
          <label htmlfor="address">Town:</label>
          <input class="address" type="text" />
          <br/>
          <label htmlfor="address">County:</label>
          <input class="address" type="text" />
          <br/>
          <label htmlfor="address">Zipcode:</label>
          <input class="address" type="text" />
          <br/>
          <label htmlfor="address">State:</label>
          <input class="address" type="text" />
          <br/>
          <label htmlfor="address">Facebook:</label>
          <input class="social" type="text" />
          <br/>
          <label htmlfor="address">Twitter:</label>
          <input class="social" type="text" />
          <br/>
          <label htmlfor="address">Instagram:</label>
          <input class="social" type="text" />
          <br/>
          <button id="submitbtn" type="submit">Add New</button>
        </form>
    )
  }
}