import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{selectmovie} from '../features/movie/Movieslice'
import{useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Moremovie = () => {
    const movies=useSelector(selectmovie);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
   
    <Container {...settings}>
         {movies &&
                movies.map((movie,key)=>(
    <Wrap key={key}>
        {movie.id}
        <Link to={"/detail/"+movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
    </Wrap>
                ))
}
      
    </Container>
  )
}

export default Moremovie;
const Container=styled(Slider)`
// marging-top:px;
ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}
li.slick-active button::before{
    color:white;
}

.slick-list{
    overflow:visible;

}
button{
    z-index:1;
   
}

`
const Wrap=styled.div`
width:15%;
img{
    border:4px solid transparent;
    border-radius:5px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
}

`