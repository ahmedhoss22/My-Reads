//#region imports
import React from 'react';
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'
import image9 from '../images/9.jpg'
import image10 from '../images/10.jpg'
import image11 from '../images/11.jpg'
import image12 from '../images/12.jpg'
import image13 from '../images/13.jpg'
import image14 from '../images/14.jpg'
import image15 from '../images/15.jpg'
import image16 from '../images/16.jpg'
import image17 from '../images/17.jpg'
import image19 from '../images/19.jpg'
import image18 from '../images/18.jpg'
import image20 from '../images/20.jpg'
import image21 from '../images/21.jpg'
import image22 from '../images/22.jpg'
import image23 from '../images/23.jpg'
import image24 from '../images/24.jpg'
import image25 from '../images/25.jpg'
import image26 from '../images/26.jpg'
import image27 from '../images/27.jpg'
import image28 from '../images/28.jpg'
import image29 from '../images/29.jpg'
import image30 from '../images/30.jpg'
import image31 from '../images/31.jpg'
import image32 from '../images/32.jpg'
import image33 from '../images/33.jpg'
import image34 from '../images/34.jpg'
import image35 from '../images/35.jpg'
import image36 from '../images/36.jpg'
import image37 from '../images/37.jpg'
import image38 from '../images/38.jpg'
import image39 from '../images/39.jpg'
import image40 from '../images/40.jpg'
import image41 from '../images/41.jpg'
import image42 from '../images/42.jpg'
import image43 from '../images/43.jpg'
import image44 from '../images/44.jpg'
import image45 from '../images/45.jpg'
import image46 from '../images/46.jpg'
import image47 from '../images/47.jpg'
import image48 from '../images/48.jpg'
import image49 from '../images/49.jpg'
import image50 from '../images/50.jpg'

import  "./books.css"
import { useState, useEffect } from 'react';
//#endregion
function Books (props){
    //#region  states
    let [search,setSearch]=useState("");
    let [filtered,setFiltered]=useState([]);
    let [books,setBooks]=useState([
    {name:"The pragmatic Programmer" , author:"Andrew Hunter David Thomas",imgSrc:image1 , id:1, piority:""},
    {name:"LEARNING REACT" , author:"Kirupa Chinnathambi",imgSrc:image2 , id:2, piority:""},
    {name:"REACT EXPLAINED" , author:"ZAX GOROOW",imgSrc:image3 , id:3, piority:""},
    {name:"Pro React 16" , author:"Abdam freeman",imgSrc:image4 , id:4, piority:""},
    {name:"React Design Patterns and Best Practice" , author:"Michele Bertoli",imgSrc:image5 , id:5, piority:""},
    {name:"React and React Native" , author:"Adam Boduch",imgSrc:image6 , id:6, piority:""},
    {name:"Learn React Hooks" , author:"Daniel Bugl",imgSrc:image7 , id:7, piority:""},
    {name:"Learning React" , author:"Alex Banks and Eve Porcello",imgSrc:image8 , id:8, piority:""},
    {name:"Full-Stack React ,TypeScript,and Node" , author:"David Choi",imgSrc:image9 , id:9, piority:""},
    {name:"JavaScript" , author:"David Choi",imgSrc:image10 , id:10, piority:""},
    {name:"JavaScript The Definitive Guide" , author:"David Flanagan",imgSrc:image11 , id:11, piority:""},
    {name:"ELOQUENY JAVASCRIPT" , author:"Marijn Haverbeke",imgSrc:image12 , id:12, piority:""},
    {name:"Programming JavaScript Applications" , author:"Eric Elliott ",imgSrc:image13 , id:13, piority:""},
    {name:"Speaking JavaScript" , author:"Dr. Axel Rauschmayer",imgSrc:image14 , id:14, piority:""},
    {name:"JavaScript The Good Parts" , author:"Douglas Crockford",imgSrc:image15 , id:15, piority:""},
    {name:"JavaScript FOR IMPATIENT PROGRAMMERS" , author:"Dr. Axel Rauschmayeriority",imgSrc:image16 , id:16, piority:""},
    {name:"Full Stack JavaScript" , author:"Azat Mardan",imgSrc:image17 , id:17, piority:""},
    {name:"Debuagging CSS" , author:"Ahmed Sgadeed",imgSrc:image18 , id:18, piority:""},
    {name:"CSS the missing manual" , author:"David Sawyer McFarland",imgSrc:image19 , id:19, piority:""},
    {name:"CSS notes for professionals" , author:"StackOverflow",imgSrc:image20 , id:20, piority:""},
    {name:"HTML and CSS Book" , author:"Kailash chandra Upadhyay",imgSrc:image21 , id:21, piority:""},
    {name:"CSS and HTML Web Design" , author:"Craig Grannell",imgSrc:image22 , id:22, piority:""},
    {name:"THE LINUX COMMAND LINE" , author:"William E. Shotts Jr.",imgSrc:image23 , id:23, piority:""},
    {name:"Windows Command-Line Administration" , author:"John Paul Mueller ",imgSrc:image24 , id:24, piority:""},
    {name:"LINUX COMMAND LINE" , author:"TRAVIS BOOTH",imgSrc:image25 , id:25, piority:""},
    {name:"HTML notes for professionals" , author:"StackOverflow",imgSrc:image26 , id:26, piority:""},
    {name:"LEARN HTML FOR BEGINNERS" , author:"JO FOSTER",imgSrc:image27 , id:27, piority:""},
    {name:"Pro MySQL NDB Cluster" , author:"Jesper Wisborg Krogh",imgSrc:image28 , id:28, piority:""},
    {name:"ANGULAR From Theory To Practice" , author:"Format: Kindle",imgSrc:image29 , id:29, piority:""},
    {name:"Pro Angular" , author:"Adam Freeman",imgSrc:image30 , id:30, piority:""},
    {name:"Angular Codebook" , author:"MIMO",imgSrc:image31 , id:31, piority:""},
    {name:"Object Oriented Programming with Angular" , author:"Chavan, Balram Morsing",imgSrc:image32 , id:32, piority:""},
    {name:"Database Design and Relational Theory" , author:"C.J.",imgSrc:image33 , id:33, piority:""},
    {name:"SQL computer Programming for beginners" , author:"Anthony Hack",imgSrc:image34 , id:34, piority:""},
    {name:"PYTHON Programming" , author:"Guido van Rossum ",imgSrc:image35 , id:35, piority:""},
    {name:"PYTHON for kids" , author:"Game-Based Learning",imgSrc:image36 , id:36, piority:""},
    {name:"PYTHON Programming" , author:"JOHN ZELLE",imgSrc:image37 , id:37, piority:""},
    {name:"Complete node.js" , author:"Rishard Haiman",imgSrc:image38 , id:38, piority:""},
    {name:"Node.js Design Patterns" , author:"Luciano Mammino",imgSrc:image39 , id:39, piority:""},
    {name:"Node.js,Express,mongo DB" , author:"Greg Lim",imgSrc:image40 , id:40, piority:""},
    {name:"Mastering Node.js" , author:"Sandro Pasquali",imgSrc:image41 , id:41, piority:""},
    {name:"Node Coodbook" , author:"Griggs, Bethany",imgSrc:image42 , id:42, piority:""},
    {name:"JAVA PROGRAMMING FOR BEGINNERS" , author:"Joshua Bloch",imgSrc:image43 , id:43, piority:""},
    {name:"JAVA FOR BEGINNERS GUIDE" , author:"Herbert Schildt",imgSrc:image44 , id:44, piority:""},
    {name:"JAVA PROGRAMMING THE BEGINNING BEGINNERS GUIDE" , author:"Herbert Schildt",imgSrc:image45 , id:45, piority:""},
    {name:"Head First Java" , author:"Trisha Gee",imgSrc:image46 , id:46, piority:""},
    {name:"Think Java" , author:"Allen Downey and Chris Mayfield",imgSrc:image47 , id:47, piority:""},
    {name:"JAVA PROGRAMMING" , author:"Kathy Sierra & Bert Bates",imgSrc:image48 , id:48, piority:""},
    {name:"Learn Java and master WRITING CODE" , author:"Sar Maroof",imgSrc:image49 , id:49, piority:""},
    {name:"Java Generics" , author:" Gilad Bracha, Martin Odersky, David Stoutamire and Philip Wadler",imgSrc:image50 , id:50, piority:""}
])
    //#endregion
    //#region effects
        useEffect(()=>{
            setSearch(props.search)
        })
    useEffect(()=>{
        if(props.search){
            let temp=books.filter((ele)=>{
                return ele.name.toLocaleLowerCase().includes(search) || ele.author.toLocaleLowerCase().includes(search)
            })

        setFiltered(temp)
    }},[search])
    useEffect(()=>{
        if(localStorage.getItem('books')){
            setBooks(JSON.parse(localStorage.getItem('books')))
        }
    },[])
    //#endregion

//#region functions
let getValue=function(id,value){
    let temp=[...books]
    
    temp.map((ele)=>{
        if(ele.id==id){
            ele.piority=value;
        }
        return  ele
    })
    setBooks(temp)
    localStorage.setItem('books',JSON.stringify(temp))
}
function draw(item){
if(search){
    return(
        <div  className="container-md box" >
        <div className="row justify-content-center ">
    { 
    item.map((ele)=>{
    return(
        <div key={ele.id} className="card  m-sm-2 book col-lg-2" >
                <img  src={ele.imgSrc} className="card-img-top" alt="..." style={{height: '73%'}}/>
                <div  className="card-body">
                    <h6  className="card-title">{ele.name}</h6>
                    <p  className="card-text">{ele.author}</p>
                </div>  
                <select value={ele.piority} className={'select'} onChange={(e)=>getValue(ele.id,e.target.value)}>
                    <option value="" disabled>Add to ..</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Want to Read">Want to Read </option>
                    <option value="Read">Read </option>
                    <option value="">None </option>
                </select>
            </div>
            )})}
    </div>
    </div>
    )
} else{
    return(
        <p></p>    
    )
}
}
//#endregion
    return(
        <React.Fragment>
            {draw(filtered)}
           </React.Fragment> 
    )
    
}

export default Books;