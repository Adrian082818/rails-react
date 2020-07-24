// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div style={{ background: '#B03B3F', paddingTop: '12px', paddingBottom: '12px', color: 'black', textDecoration: 'none' }}>

//     <NavLink
//       to="/"
//       style={{padding: '12px', margin: '0 6px 6px', textDecoration: 'none', color: 'black'}}
//       >
//       <span className="navbar-logo">React Games</span>
//     </NavLink>

//       {/* <NavLink
//         to="/"
//         style={link}
//         >
//         <span className="navbar-link">Home</span>
//       </NavLink> */}
//       <NavLink
//         to="/games"
//         style={link}
//         className="navbar-link"
//         >
//         Game inventory
//       </NavLink>
//       <NavLink
//         to="/new"
//         style={link}
//         className="navbar-link"
//         >
//         Add Game 
//       </NavLink>
//       {/* <NavLink
//         to="/reviews"
//         style={link}
//         className="navbar-link"
//         >
//         Game Reviews
//       </NavLink> */}
//     </div>
//   )
// }

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   textDecoration: 'none',
//   color: 'white',
// }

// export default NavBar;
import React, { Component } from 'react' 

class NavBar extends Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
    }

    this.showNav = this.showNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  showNav(event) {
    event.preventDefault()

    this.setState({
      showNav: true,
    }, () => {
      document.addEventListener('click', this.closeNav)
    })
  }

  closeNav() {
    this.setState({
      showNav: false
    }, () => {
      document.removeEventListener('click', this.closeNav)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showNav}>
          Games
        </button>
        {
          this.state.showNav
          ? (
            <div className="nav">
              <button></button>
              <button></button>
              <button></button>
            </div>
          )
          : (
            null
          )
        }
      </div>
    )
  }
}

export default NavBar