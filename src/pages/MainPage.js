//페이지: 템플릿(css)을 적용하고 form  컨테이너를 받아옴. 

import React from 'react';

import ParallaxTemplate from '../components/ParallaxTemplate';
import SearchEngine from '../components/SearchEngine';
import MovingImages from '../components/MovingImages';

const MainPage= () => {
   return (
    <ParallaxTemplate>
    <MovingImages/>
    <SearchEngine/>
    </ParallaxTemplate>
  );
};

export default MainPage;


