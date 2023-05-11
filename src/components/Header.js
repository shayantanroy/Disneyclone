import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
    {/* <Logo src="/images/logo.svg"/> */}
    <Link to={"/"}><Logo src="/images/logo.svg"/></Link>
    
    <Navmenu>
      <a><img src="/images/home-icon.svg"/>
        <span>HOME</span>
        </a>
        <a><img src="/images/search-icon.svg"/>
        <span>SEARCH</span>
        </a>
        <a><img src="/images/watchlist-icon.svg"/>
        <span>WATCHLIST</span>
        </a>
        <a><img src="/images/original-icon.svg"/>
        <span>ORIGINALS</span>
        </a>
        <a><img src="/images/movie-icon.svg"/>
        <span>MOVIES</span>
        </a>
        <a><img src="/images/series-icon.svg"/>
        <span>SERISE</span>
        </a>

    </Navmenu>
    <UserImage src="/IMG_20200127_215128.jpg"/>
    </Nav>
  )
}

export default Header
const Nav=styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
position:sticky;
top:0;
left:0;
width:100%;
z-index:1;
overflow-x:hidden;

`
const Logo=styled.img`
width:80px;
margin-left:36px;
`
const Navmenu=styled.div`
display:flex;
align-items:center;
flex:1;
margin-left:25px;

a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;
  
}
img{
  height:20px;
}
span{
  font-size:13px;
  letter-spacing:1.42px;
//   &:after{
//     content:"";
//     height:2px;
//     background:white;
//     display:block;
   
//   }
}
  span:hover{
    border-bottom:2px solid white;
    transition:0.3s;
  }

`
const UserImage=styled.img`
width:48px;
height:48px;
border-radius:50px;
cursor:pointer;
margin-right:36px;

`
