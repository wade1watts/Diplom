import React from "react"; 
import axios from 'axios';




import SourceButton from "../../UI/Buttons/SourceButton"; 
import ImageUploader from "../UploadIMG";


const App = () => {
  return (
    
    <div className="container" style={{ marginBottom: '150px' }}>
       <div>
      <h1>Загрузка изображения</h1>
      <ImageUploader />
    </div>
    <div className="button-container">
      <SourceButton/>
    </div>
  </div>
  );
};

export default App;
