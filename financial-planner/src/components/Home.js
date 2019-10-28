import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Home(){

    return(
        <div className="HomeButtons">
            <Link to='/lifestyle'>
                <button className="HomeButton">Select Lifestyle</button>
            </Link>
            <Link to='/career'>
                <button className="HomeButton">Select Career</button>
            </Link>
        </div>
    )};

  

export default Home;