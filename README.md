### Slider Carousel

Simple RESPONSIVE styled react component of slider carousel

####  Presenter part 
```
./components/slider-carousel/SliderCarousel.js
```
Params:
 - className - [string] additional styles for carousel
 - selected - [number] index of item selected
 - items - [array] of jsx components which are presented on each 
 page of carousel
 - onNextButtonClick - [func(['prev' | 'next'])] next or prev button click handler
 - onIndicatorClick - [func(indicator index)] - on indicator item click handler
 - withIndicator - [boolean] - show Indicator or not 
 - withButtons - [boolean] -  show next and prev buttons or not
 
 #### Controller part (container)
```
./containers/slider-carousel/SliderCarouselContainer.js
``` 
 