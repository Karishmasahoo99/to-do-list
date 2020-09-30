import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  Items
                  <span className="m-2 badge badge-pill badge-secondary">
                      {this.props.totalCounters}
                  </span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;