import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchFormBlock = styled.form`
  position: absolute;
  width: 40vw;

  display: flex;
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
  z-index: 5;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 35vw;
  height: 9vh;
  left: 2.5vw;

  background-color: white;
  font-size: 2.5vw;
  text-align: center;
  border-radius: 0.3vw;
  top: 14vh;
  border: 2px solid black;
`;

const StyledResultInput = styled(StyledInput)`
  position: absolute;
  width: 35vw;
  height: 9vh;
  left: 2.5vw;

  background-color: white;
  font-size: 2.5vw;
  text-align: center;
  border-radius: 0.3vw;
  top: 14vh;
  border: 2px solid black;
  position: absolute;
  color: black;
  background-color: #f0f0f2;
  border: 2px solid black;
  width: 35vw;
  height: 9vh;
  z-index: 2;
  top: 40vh;
  left: 2.5vw;
  background-color: white;
  font-size: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
`;

const StyledButton = styled.button`
  position: absolute;
  height: 10vh;
  font-size: 1.5vw;
  border: none;
  width: 6vw;
  height: 6vh;
  border-radius: 0.3vw;
  top: 30vh;
  left: 17vw;
  font-weight: 500;
  background-color: #e8667e;
  color: #40040f;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  padding: 1px;
  word-wrap: break-word;
  border: 0.2px solid gray;
`;



const SearchEngine = () => {
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState(null);



  const onChange = async(e) => {
    try {
      setKeyword(e.target.value);
      /*
      const response = await axios(
        {
          method: "POST", 
          url: "https://openapi.naver.com/v1/papago/n2mt",
          headers:{
            "X-Naver-Client-Id": "oUuobRnouNDEUOdAAzME",
          "X-Naver-Client-Secret": "njbDXuNvjV",
          }
        }
      )

      console.log(response)
      setData("dhh");
      */
     
    } catch (e) {
      console.log(e);
    }
    
  };
  

  try {

      return (
        <SearchFormBlock>
          <StyledInput
            placeholder="면접질문을 입력하세요!"
            onChange={onChange}
            value={keyword}
          />
        <StyledButton >번역</StyledButton>
        
        <StyledResultInput
            placeholder="번역을 기다리세요!"
            value={data}
          />
        </SearchFormBlock>
      );

    
  } catch (e) {
    console.log(e);
  }
};

export default SearchEngine;
