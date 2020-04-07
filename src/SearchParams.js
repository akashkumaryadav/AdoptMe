import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropDown from "./custom_hooks/useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown("Breeds", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      breed,
      location,
      type: animal,
    });
    setPets(animals || []);
  }

  async function fetchData() {
    setBreeds([]);
    setBreed("");
    const { breeds: apibreeds } = await pet.breeds(animal);
    const breedStrings = apibreeds.map(({ name }) => name);
    setBreeds(breedStrings);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
