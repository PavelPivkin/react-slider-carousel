import React from 'react'
import PropTypes from 'prop-types'
import './slider-carousel.css'

const SliderCarousel = ({className, selected, items, onNextButtonClick, onIndicatorClick, withIndicator, withButtons}) => {
    return (
        <div className={['slider-carousel', className].join(' ')}>
            {
                withButtons &&
                <button onClick={() => onNextButtonClick('prev')}
                        className={'slider-carousel__button slider-carousel__button_left'}>
                    <i className={'fas fa-angle-left'}/>
                </button>
            }
            <div className={'slider-carousel__content'}>
                {
                    items.map((item, index) => (
                    <div key={'slider-carousel-item-' + index} className={'slider-carousel__item'} style={ {transform: 'translateX(' + ((index - selected) * 100)  + '%)'}}>
                        {item}
                    </div>))
                }
                {
                    withIndicator &&
                    <ul className="slider-carousel__indicators">
                        {
                            items.map((item, index) =>  (
                                <li key={'indicator-item-' + index} onClick={() => onIndicatorClick(index)}
                                    className={
                                        [
                                            "slider-carousel__indicator-item",
                                            index === selected ? 'slider-carousel__indicator-item_active' : null
                                        ].join(' ')}>
                                </li>
                            ))}
                    </ul>
                }
            </div>
            {
                 withButtons &&
                 <button onClick={() => onNextButtonClick('next')}
                         className={'slider-carousel__button slider-carousel__button_right'}>
                     <i className={'fas fa-angle-right'}/>
                 </button>
            }
        </div>
    )
}

SliderCarousel.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.number,
    items: PropTypes.array,
    onNextButtonClick: PropTypes.func,
    onIndicatorClick: PropTypes.func,
    withIndicator: PropTypes.bool,
    withButtons: PropTypes.bool
}

SliderCarousel.defaultProps = {
    className: '',
    withIndicator: true,
    withButtons: false
}

export default SliderCarousel