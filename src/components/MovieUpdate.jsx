import React from "react";
import axios from "axios";

export default class MovieUpdate extends React.Component {
  state = {
    id: 0,
    MovieName: " ",
    Actors: " ",
    Director: " ",
    Genre: " ",
    Duration: " ",
  };
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ MovieName: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ Actors: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ Director: event.target.value });
  };
  handleChange4 = (event) => {
    this.setState({ Genre: event.target.value });
  };
  handleChange5 = (event) => {
    this.setState({ Duration: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevent browser for auto refresh
    const user = { id: this.state.id, MovieName: this.state.MovieName, Actors: this.state.Actors,Director: this.state.Director, 
        Genre: this.state.Genre, Duration: this.state.Duration };
   
axios.put('http://127.0.0.1:8000/api/movies/${this.state.id}', {
        user,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Update Details</h1>
        <label>
          ID:
          <input type="number" name="id" onChange={this.handleChange} />
          MovieName:
          <input type="text" name="MovieName" onChange={this.handleChange1} />

          Actors
          <input type="text" name="Actors" onChange={this.handleChange2} />

          Director
          <input type="text" name="Director" onChange={this.handleChange3} />

          Genre
          <input type="text" name="Genre" onChange={this.handleChange4} />

          Duration
          <input type="text" name="Duration" onChange={this.handleChange5} />

        </label>
        <button type="submit"> Update User</button>
      </form>
    );
  }
}