import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Books from '../components/Books';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import "./menu.css"
import { useState} from 'react';
import {Link} from "react-router-dom"


function Menu(){

    let [search,setSearch]=useState('')
    function handleSearch(value){
        if(value!=''){
            setSearch(value)
        }else{
            setSearch('')
        }    
    }
    return (
        <React.Fragment>
            <div className="d-flex align-items-center mb-4" style={{height : "60px", boxShadow:"2px 2px 50px -15px #000"}}>
               <Link to="/">
                 <FontAwesomeIcon icon={faArrowLeft} id={"back"} style={{}} className="badge  m-1 p-2"></FontAwesomeIcon>
               </Link>
                <input type='text' className='form-control' onKeyUp={(e)=>handleSearch(e.target.value)}  placeholder='Search by Title or by Author'/>
            </div>
            <Books search={search}/>
        </React.Fragment>
    );
}
 
export default Menu;