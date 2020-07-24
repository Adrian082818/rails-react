// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const Home = () => {

//   return (
//     <div className="home">
//       <div className="welcome">
//         <h2>Looking for a Game</h2>
//         <span className="welcome-text">Find Game you're interested in!</span>
//         <Link to="/games">
//             <Button className="btn btn-md btn-danger">
//               Get Started
//             </Button>
//          </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react'; 
import { Container } from 'semantic-ui-react';
import './Home.css'

const Home = () => (
    <div>
        <Container className="container">
            <div className="intro1">
                <h2>Welcome to React Games</h2>
            </div>
            
            <img src="https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif" alt="gaming controller" className="gameGif"></img>
        </Container>
        <br />
        <button className="ui blue inverted animated button" onClick={() => window.location.href='/games'}>
            <div className="visible content">Game Inventory</div>
            <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
        </button>
    </div>

);

export default Home;