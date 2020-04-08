import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Model from "./Model";

class Details extends React.Component {
  state = { loading: true, showModel: false };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
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

  toggleModel = () => this.setState({ showModel: !this.state.showModel });
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h2>loading..</h2>;
    }
    const {
      name,
      animal,
      location,
      description,
      breed,
      media,
      showModel,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModel}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModel ? (
            <Model>
              <div>
                <h1>Are You sure you want to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModel}>No I am a monster</button>
                </div>
              </div>
            </Model>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundry>
      <Details {...props} />
    </ErrorBoundry>
  );
}
