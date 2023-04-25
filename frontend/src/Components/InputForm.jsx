import React, { useState } from 'react';
import axios from 'axios';

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    city: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/update/marker/1',
            formData,
            {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Requested-With, Accept'
                }
              }
            );
      alert('Data added successfully!');
    } catch (error) {
      alert('Error adding data!');
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Широта:
        <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
      </label><br/> 
      <label>
        Долгота:
        <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
      </label><br/>
      <label>
        Город:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDataForm;
