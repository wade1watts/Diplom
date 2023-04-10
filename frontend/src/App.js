import React from 'react';
import axios from 'axios';
import Navbar from './Components/navbar';
import Sidebar from './Components/sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Map from './Components/pages/map';
import Source from './Components/pages/sources';

class App extends React.Component {
  // state = { details: [],  markers: []}

  // componentDidMount(){
  //   let data;
  //   axios.get('http://localhost:8000')
  //   .then(res => {
  //     data = res.data;
  //     this.setState({
  //       details: data
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
    
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     markers: [],
  //   };
  // }

  render() {
    return (
      <div>
      {/* <header>Данные из Django</header>
      <hr></hr>
      {this.state.details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.longitude}</h2>
            <p>{output.channel}</p>
          </div>
        </div>
      ))} */}

      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/map' element={<Map />} />
        <Route exact path='/source' element={<Source />} />
      </Routes>
      </Router>
    </div>
      


      
    )
  }
}
export default App;
