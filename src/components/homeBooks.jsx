import React from 'react';
import { useState, useEffect } from 'react';


function HomeBooks(props){

    let [books,setBooks]=useState(JSON.parse(localStorage.getItem('books')))
    let [filtered,setFiltered]=useState()
    let [name,setName]=useState(props.name)
    
    useEffect(()=>{
        if(books){
            let temp=books.filter((ele)=>{
            return ele.piority == name
        })
         setFiltered(temp)
        }
    },[books])
    useEffect(()=>{
         setName(props.name) 
        },[props.name])

       let getValue=function(id,value){
            let temp=[...books]
            temp.map((ele)=>{
                if(ele.id==id){
                    ele.piority=value;
                }
            return  ele
        })
          setTimeout(()=>{
              localStorage.setItem('books',JSON.stringify(temp))
              setBooks(temp)
              window.location.reload()
        },500)
    }
    
    return (
        <div  className="container-md box" >
        <div className="row justify-content-around">
     {   
         filtered!=null && filtered.map((ele)=>{
     return(
        <div key={ele.id} className="card m-sm-2 book" style={{width: '18rem'}}>
                <img  src={ele.imgSrc} className="card-img-top" alt="..." style={{height: '73%'}}/>
                <div  className="card-body">
                    <h5  className="card-title">{ele.name}</h5>
                    <p  className="card-text">{ele.disc}</p>
                </div>  
                <select value={ele.piority} className={'select'} onChange={(e)=>getValue(ele.id,e.target.value)}>
                    <option value="" disabled>Add to ..</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Want to Read">Want to Read </option>
                    <option value="Read">Read </option>
                    <option value="">None </option>
                </select>
            </div>
                 ) 
             })
            }
            </div>
             </div>
    )
        
}

export default HomeBooks;