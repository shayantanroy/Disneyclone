import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";


const Description = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such document in firebase");
        }
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  }, []);
  return (
    <Container>
      <Background>
      <img src={detailData.backgroundImg}/>
      </Background>
      <Titellogo>
    <img src='/images/viewers-disney.png'/>
      </Titellogo>
      <Controls>
        <Playbutton>
          <img src='\images\play-icon-black.png'/>
          <span>Play</span>
        </Playbutton>
        <Trailerbutton>
        <img src='\images\play-icon-white.png'/>
        <span>Trailer</span>
        </Trailerbutton>
        <Addbutton>
        <span>+</span>
        </Addbutton>
        <Groupwatchbutton>
        <img src='/images/group-icon.png'/>
        </Groupwatchbutton>
      </Controls>
      <Subtitel>
        bfbAF/bf/BF 8931270302372973927
      </Subtitel>
      <Descriptionmovie>
        loremxckzxncoZNpNvpNVpNZvpZNVnZvnNvZN:vnZ:vn;z
      </Descriptionmovie>
      
    </Container>
  )
}

export default Description
const Container=styled.div`
// width:100%;
height:91vh;
position:relative;
padding:70px;
`
const Background=styled.div`
img{
width:100%;
height:100%;
objective-fit:cover;
// position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
position:absolute;
opacity:0.8;

}

`
const Titellogo=styled.div`
// z-index:1;
height:30vh;
width:35vw;
img{
  width:100%;
  height:100%;
  object-fit:contain;
}`
const Controls=styled.div`
margin-top:20px;
height:50px;
display:flex;
align-items:center;
`
const Playbutton=styled.button`
background-color:rgba(249,249,249);
padding:0 24px;
display:flex;
align-items:center;
justify-content:center;
// font-width:700;
font-size:15px;
height:50px;
border-radius:4px;
letter-spacing:1.8px;
margin-right:22px;
border:none;
cursor:pointer;
&:hover{
  background-color:rgba(198,198,198);
}`
const Trailerbutton=styled(Playbutton)`
background:rgba(0,0,0,0.3);
border:1px solid rgba(249,249,249);
color:rgba(249,249,249);

`
const Addbutton=styled.button`
display:flex;
align-items:center;
justify-content:center;
width:40px;
height:40px;
text-align:center;
border-radius:100%;
cursor:pointer;
span{
font-size:25px;
font-weight:700;
}
background:rgba(0,0,0,0.6);
border:2px solid rgba(249,249,249);
color:rgba(249,249,249);
&:hover{
  background-color:rgba(198,198,198);
}
margin-right:10px;
`

const Groupwatchbutton=styled.button`
display:flex;
align-items:center;
justify-content:center;
width:40px;
height:40px;
// text-align:center;
border-radius:100%;
cursor:pointer;
font-size:15px;
font-weight:700;
background:rgba(0,0,0,0.8);
border:2px solid rgba(249,249,249);
color:rgba(249,249,249);
&:hover{
  background-color:rgba(198,198,198);
}`
const Subtitel=styled.div`
margin-top:26px;
`
const Descriptionmovie=styled.div`
margin-top:16px;
`