import React from 'react';
import styled from 'styled-components'

//searhEngine과 movingImages 넣기 
const ParallaxBlock = styled.div`
width: 100% auto;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 500vh;
margin-top: 5vh;
`



const ParallaxTemplate = ({children}) => {
    return (
        <ParallaxBlock>
        {children}
        </ParallaxBlock>
    );
};

export default ParallaxTemplate;