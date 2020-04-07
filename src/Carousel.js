import React from "react";

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600']
        if (media.length) {
            photos = media.map(({ large }) => large);
        }
        return { photos }
    }

    clickHandler = (event) => {
        this.setState({
            active: +event.target.dataset.index,
        })
    }

    render() {
        const { photos, active } = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal-thumbnail" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            data-index={index}
                            src={photo}
                            key={photo}
                            alt={photo}
                            className={index === active ? "active" : ""}
                            onClick={this.clickHandler} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;