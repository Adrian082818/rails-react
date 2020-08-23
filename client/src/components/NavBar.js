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

import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; } 
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover {color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;




export default Navbar