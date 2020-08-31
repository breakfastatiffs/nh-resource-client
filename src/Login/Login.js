import React from 'react';

export default class Login extends React.Component {
    render () {
        return (
            <div>
              <p> <a href="tiffanysummerford@gmail.com">Contact</a> an admin about adding something to the page!</p>
                <form>
                  <label>Email:</label>
                  <input type="text" />
                  <label>Password:</label>
                  <input type="text" />
                  <button>Sign In</button>
                </form>
            </div>
        )
    }
}