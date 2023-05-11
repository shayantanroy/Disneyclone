import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
        <video src='/videos/1564674844-disney.mp4'muted loop autoPlay/>
        
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png'/>
        <video src='/videos/1564676115-marvel.mp4'muted loop autoPlay/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png'/>
        <video src='/videos/1564676296-national-geographic.mp4'muted loop autoPlay/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png'/>
        <video src='/videos/1608229455-star-wars.mp4'muted loop autoPlay/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png'/>
        <video src='/videos/1564676714-pixar.mp4'muted loop autoPlay/>
      </Wrap>
    </Container>
  )
}

export default Viewers
const Container=styled.div`
margin-top:40px;
display:flex;
justify-content:space-between;
`
const Wrap=styled.div`
width:19%;
border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
position:relative;
cursor:pointer;
img{
  width:100%;
  height:100%;
}

video{
  display:none;
  width:100%;
  height:100%;
  top:0;
  right:0;
  left:0;
  bottom:0;
  object-fit:cover;
  position:absolute;
  z-index:-1;
}
&:hover{
  box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border:3px solid rgba(249,249,249,0.8);
    transition:0.4s;
    video{
      display:block;
    }
  
}

`