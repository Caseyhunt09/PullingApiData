import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
import Datatable from './components/datatable/DataTable.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

componentDidMount()
 {

const url = "https://fortnite-api.theapinetwork.com/store/get";
      fetch(url)
        .then(function(res) {
          return res.json();
        })
        .then(function(item) {
          console.log(item.data);
        });

}

render () {

        return (
          <div>
          <Welcome name='Sara' email='Sara@gmail.com' phone='(816)123-4567'/>
          <Welcome2/>
          <h1>Data Table</h1>
          <Datatable/>
          </div>

        );
    }
  }




export default App;
