import React from "react"; 
import axios from 'axios';



class Source extends React.Component {

    state = { details: [],  markers: []}

    componentDidMount(){
      let data;
      axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        console.log(err);
      })
      
    }

      render() {
            return(
                <div>
                    <header>Данные из Django</header>
                    <hr></hr>
                    {this.state.details.map((output, id) => (
                    <div key={id}>
                    <div>
                        <h2>{output.longitude}</h2>
                         <p>{output.channel}</p>
                    </div>
                </div>
                    ))}
                </div>
            )
    }
}
export default Source;