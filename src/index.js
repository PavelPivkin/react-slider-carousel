import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SliderCarouselContainer from "./containers/slider-carousel/SliderCarouselContainer";

ReactDOM.render(<SliderCarouselContainer/>, document.getElementById('root'));
registerServiceWorker();
