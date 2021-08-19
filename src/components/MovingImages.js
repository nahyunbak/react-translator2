import React, {useEffect, useState, useRef} from 'react';
import styled, {css} from 'styled-components';
import img1 from '../image/37.png'
import img2 from '../image/38.png'
import img3 from '../image/39.png'
import img4 from '../image/40.png'
import img5 from '../image/41.png'
import img6 from '../image/42.png'
import img7 from '../image/43.png'
import img8 from '../image/2.png'
import img9 from '../image/3.png'
import img10 from '../image/4.png'
import img11 from '../image/5.png'
import img12 from '../image/6.png'
import img13 from '../image/1.png'
import img14 from '../image/20.png'

const StyledDiv = css`
position: absolute;
  height: inherit;
background-position: top center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 20vh;
  z-index: 1;
  
`
const StyledDiv1 =styled.div`
${StyledDiv};
background-image: url(${img1});

height: 91vh;
z-index: 1;

` 
const StyledDiv2 =styled.div`
${StyledDiv};
background-image: url(${img2});
top: 47vh;
height: 50vh;
left: -30vw;
z-index:3;
` 
const StyledDiv3 =styled.div`
${StyledDiv};
background-image: url(${img3});
top: 47vh;
height: 50vh;
left: 20vw;
z-index: 3;

` 
const StyledDiv4 =styled.div`
${StyledDiv};
background-image: url(${img4});
top: 52vh;
height: 40vh;
z-index: 0;
left: -25vw;
` 
const StyledDiv5 =styled.div`
${StyledDiv};
background-image: url(${img5});
top: 80vh;
height: 20vh;
z-index: 2;
left: -8vw;
` 
const StyledDiv6 =styled.div`
${StyledDiv};
background-image: url(${img6});
top: 78vh;
z-index: 1;
` 
const StyledDiv7 =styled.div`
${StyledDiv};
background-image: url(${img7});
height: 120vh;
top: 84vh;
z-index:-1;
` 

const StyledDiv8 =styled.div`
${StyledDiv};
background-image: url(${img9});
height: 120vh;
top: 0;
left: 25vw;
z-index:-3;
` 
const StyledDiv9 =styled.div`
${StyledDiv};
background-image: url(${img12});
height: 110vh;
top: 14vh;
right: 35vw;
z-index:-3;
&:hover{
  transform: scale(1.2);

}
` 







const MovingImages = () => {


 var x;
 var y;
  var speed=0.3;
    

  let mx=0;
  let my=0;
useEffect(()=>  {
    window.addEventListener('mousemove', e=>{
            
      x =(e.clientX -window.innerWidth/2);
      y = (e.clientY -window.innerHeight/2);

      
    
        mx+=(x-mx) *speed;
        my+=(y-my) * speed;


        movingImg2.current.style.transform = `translate(${mx /18}px,  0)`;
        movingImg3.current.style.transform = `translate(${mx /25}px,  0)`;
        movingImg4.current.style.transform = `translate(${-mx /14}px,  0)`;
        movingImg5.current.style.transform = `translate(${mx /10}px,  0)`;
        movingImg6.current.style.transform = `translate(${mx /3}px,  0)`;
        movingImg7.current.style.transform = `translate(0,  ${my /10}px)`;
        movingImg8.current.style.transform = `translate(${mx /400}px,  ${my /400}px)`;
        movingImg9.current.style.transform = `translate(${mx /500}px,  ${my /500}px)`;
        
      }
      );
    
    }, [])



  const movingImg1 = useRef(null);
  const movingImg2 = useRef(null);
  const movingImg3 = useRef(null);
  const movingImg4 = useRef(null);
  const movingImg5 = useRef(null);
  const movingImg6 = useRef(null);
  const movingImg7 = useRef(null);
  const movingImg8 = useRef(null);
  const movingImg9 = useRef(null);
  const movingImg10 = useRef(null);
  const movingImg11 = useRef(null);

    return (
        <>
        <StyledDiv1 ref={movingImg1}/>
        <StyledDiv2 ref={movingImg2}/>
        <StyledDiv3 ref={movingImg3}/>
        <StyledDiv4 ref={movingImg4}/>
        <StyledDiv5 ref={movingImg5}/>
        <StyledDiv6 ref={movingImg6}/>
        <StyledDiv7 ref={movingImg7}/>
        <StyledDiv8 ref={movingImg8}/>
        <StyledDiv9 ref={movingImg9}/>

        </>
    );
};

export default MovingImages;