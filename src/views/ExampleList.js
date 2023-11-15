import React, { Component } from 'react'
import axios from 'axios';
import Example from '../components/Example';


export default class ExamplesList extends Component {
  constructor(props) {
    super(props);


    this.state = { examples: [] };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/examples/')
      .then(response => {
        this.setState({ examples: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDelete = () => {
    axios.get('http://localhost:5000/examples/')
      .then(response => {
        this.setState({ examples: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  exampleList() {
    const sortedExamples = [...this.state.examples].sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return sortedExamples.map((currentExample) => (
      <Example
        example={currentExample}
        key={currentExample._id}
        onDelete={this.handleDelete}
      />
    ));
  }


  render() {
    return (
      <div>
        <h3>Examples List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.exampleList() }
          </tbody>
        </table>
      </div>
    )
  }
}

;