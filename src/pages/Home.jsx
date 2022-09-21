import React from 'react';
import {Link} from "react-router-dom"
import HomeBooks from './../components/homeBooks';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home(){
    
    
    return (
        <React.Fragment>

            <h1>My Reads</h1>
            <h2>Currently Reading</h2>
            <hr />
            <HomeBooks name={"Currently Reading"}/>
            <h2>Want to Read</h2>
            <hr />
            <HomeBooks name={"Want to Read"}/>
            <h2>Read</h2>
            <hr />
            <HomeBooks name={"Read"}/>
            <Link to="/menu"> 
                <FontAwesomeIcon icon={faPlusCircle} className={'plus'}></FontAwesomeIcon>
            </Link>
        </React.Fragment>
    )
}
export default Home;