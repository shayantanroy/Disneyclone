import React, { useEffect } from 'react'
import styled from 'styled-components'
import Imagesliding from './Imagesliding'
import Viewers from './Viewers'
// import Movies from './Movies'
import db from '../firebase'
import {useDispatch} from 'react-redux'
import { setMovies } from '../features/movie/Movieslice'
// import Moremovie from './Moremovie'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'



const Home = () => {     
  const dispatch=useDispatch();

  // useEffect(()=>{
  // db.collection("movies").onSnapshot((snapshot)=>{
  //   let tempMovies=snapshot.docs.map((doc)=>{
  //     return {id:doc.id, ...doc.data()}
  //   })
  //   dispatch(setMovies(tempMovies));
  //   // console.log(tempmovie);
  // })
   
  // },[]);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    });
  }, []);
  return (
    <Container>
      <Imagesliding/>
      <Viewers/>
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home;

const Container=styled.div`
height:210vh;
padding:30px;
overflow-X:hidden;
// position:relative;

&:before{
    background-image:url("/images/home-background.png");
    background-size:cover;
    background-position:center;
    position:fixed;
    // position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    content:"";
    z-index:-1;
}`