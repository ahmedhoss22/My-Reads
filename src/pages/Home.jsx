import React from 'react';
import {Link} from "react-router-dom"
import HomeBooks from './../components/homeBooks';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home(){
    
    
    return (
        <React.Fragment>
            <h1>My Reads  </h1>
            <h2>Currently Reading<span className='line'></span></h2>
            <HomeBooks name={"Currently Reading"}/>
            <h2>Want to Read <span className='line' style={{left:"7%",width:"150px"}}></span></h2>
            <HomeBooks name={"Want to Read"}/>
            <h2>Read <span className='line' style={{left:"3%" , width:"80px"}}></span></h2>
            <HomeBooks name={"Read"}/>
            <Link to="/menu"> 
                <FontAwesomeIcon icon={faPlusCircle} className={'plus'}></FontAwesomeIcon>
            </Link>
        </React.Fragment>
    )
}
export default Home;