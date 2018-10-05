import React from 'react';

class Body extends React.Component {

  render() {
    let { isLoggedIn, currentUser } = this.props;
    currentUser = 'Username : ' + currentUser;

    return (
      <div>
        <h5> { isLoggedIn && currentUser } </h5>
      </div>
    )
  }
}

export default Body;
