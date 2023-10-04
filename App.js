import React, { Component } from 'react';

class FetchExample extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Use the Fetch API to make a GET request to your API or server
    fetch('https://jsonplaceholder.typicode.com/users') // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Fetched Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchExample;
