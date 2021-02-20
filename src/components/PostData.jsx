import React from "react";
import axios from "axios";

export default class PostData extends React.Component {
  state = {
    MovieName: " ",
    Actors: " ",
    Director: " ",
    Genre: " ",
    Duration: " ",
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
     //prevent browser from auto refresh
     const user = { MovieName: this.state.MovieName, Actors: this.state.Actors,Director: this.state.Director, 
       Genre: this.state.Genre, Duration: this.state.Duration  };
      // console.log(user)

    // const MovieName = { MovieName: this.state.MovieName };
    // const Actors = { Actors: this.state.Actors };
    // const Director = { Director: this.state.Director };
    // const Genre = { Genre: this.state.Genre };
    // const Duration = { Duration: this.state.Duration };
axios.post("http://127.0.0.1:8000/api/movies", { user },)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
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

        <button type="submit"> Add Movie </button>
      </form>
    );
  }
}
