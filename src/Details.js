import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}.${animal.contact.address.state}`,
        description: animal.description,
        breed: animal.breeds.primary,
        media: animal.photos,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading..</h2>;
    }
    const { name, animal, location, description, breed, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
// export default Details;

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundry>
      <Details {...props} />
    </ErrorBoundry>
  );
}
