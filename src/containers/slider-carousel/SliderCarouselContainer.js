import React from 'react'
import SliderCarousel from "../../components/slider-carousel/SliderCarousel";
import CarouselNewsItem from "../../components/carousel-news-item/CarouselNewsItem";

const items = [
    {
        title: 'Котики милейшие животные',
        topic: 'в целом мире',
        date: '',
        image: 'http://www.mixnews.lv/uploads/mixer/images/2016/10/13/kokoko_1_webmixerdetailed_jpg.jpg'
    },
    {
        title: 'Погладишь его',
        topic: 'и сразу тебе станет лучше',
        date: '',
        image: 'https://medialeaks.ru/wp-content/uploads/2017/10/catbread-02-586x500.jpg'
    },
    {
        title: 'А еще с ними прикольно играть',
        topic: 'только берегите руки!',
        date: '',
        image: 'http://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg'
    }
]

class SliderCarouselContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
            data: {},
            selected: 0,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        let width = window.innerWidth;
        if (width > 768) {
            this.setState({ intervalId: setInterval(() => this.next(), 6000)});
        }

    }

    next = () => {
        let _selected = this.state.selected >= items.length - 1 ? 0 : this.state.selected + 1;
        this.setState({
            selected: _selected
        });
    }

    prev = () => {
        let _selected = this.state.selected > 0 ? this.state.selected - 1 : items.length - 1;
        this.setState({selected: _selected});
    }

    onButtonClick = (direction) => {
        clearInterval(this.state.intervalId);
        if (direction === 'prev') {
            this.prev()
        }
        if (direction === 'next') {
            this.next()
        }
    }

    onIndicatorClick = (index) => {
        clearInterval(this.state.intervalId);
        this.setState({selected: index});
    }

    getItems = () => (
        items.map((item, index) =>
            <CarouselNewsItem title={item.title} topic={item.topic} date={item.date} image={item.image}/>
        )
    )

    render() {
        return <SliderCarousel
            selected={this.state.selected}
            onIndicatorClick={this.onIndicatorClick}
            onNextButtonClick={this.onButtonClick}
            items={this.getItems()}
            withButtons={true}
        />;
    }
}

export default SliderCarouselContainer