import React, { useState } from 'react';
import '../styles/Navbar.css'
import { Form, FormControl, Button } from 'react-bootstrap';
import Geocode from 'react-geocode';
import axios from 'axios';

const SearchBar = ({ setPharmacies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Récupérer la position de l'utilisateur en utilisant l'API de géolocalisation
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Convertir les coordonnées en adresse
        const response = await Geocode.fromLatLng(latitude, longitude);
        const address = response.results[0].formatted_address;

        // Recherche des pharmacies à proximité en utilisant l'API Google Places
        const googlePlacesResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=pharmacy&keyword=${searchQuery}&key=<votre-clé-API-Google>`
        );
        const pharmacies = googlePlacesResponse.data.results;

        // Insérer les pharmacies dans la base de données
        await axios.post('/api/pharmacies', { address, pharmacies });

        // Récupérer les pharmacies dans la base de données
        const response2 = await axios.get('/api/pharmacies');
        const pharmaciesFromDb = response2.data.pharmacies;

        // Mettre à jour l'état du composant parent
        setPharmacies(pharmaciesFromDb);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form inline onSubmit={handleSubmit} className="searchbar">
      <FormControl
        type="text"
        placeholder="Rechercher des pharmacies à proximité..."
        className='input'
        id='txtinput'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit" className='input' id='btninput'>
        Rechercher
      </Button>
    </Form>
  );
};

export default SearchBar;

//<div className='searchbar'>
//<input className='input' id='txtinput' type='text' name='' placeholder="saisissez vos recherches" marginRigth="10px"/>
//<input className='input' id='btninput' type='submit' name='' value='recherche'/>
//</div>