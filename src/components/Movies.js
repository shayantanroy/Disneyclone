import React from 'react'
import styled from 'styled-components'
import{selectmovie} from '../features/movie/Movieslice'
import{useSelector} from 'react-redux'



const Movies = () => {
    const movies=useSelector(selectmovie);

  return (
    <Container>
        <h4>Recommened for you</h4>
        <Contant>
            {movies &&
                movies.map((movie)=>(
                 <Wrap>
                 <img src={movie.cardImg}/>
             </Wrap>
                ))
            }
            {/* <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>

            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap>
            <Wrap>
                <img src="\IMG_20200127_215128.jpg"/>
            </Wrap> */}

        </Contant>
      
    </Container>
  )
}

export default Movies
const Container=styled.div`
margin-top:30px;
`
const Contant=styled.div`
display:flex;
// justify-content:space-between;
gap:1.7%;
flex-wrap:wrap;
`
const Wrap=styled.div`
margin-top:30px;
width:15%;
// height:10%;
img{
    width:100%;
    height:100%;
}
`
