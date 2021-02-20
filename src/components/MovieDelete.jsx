import React from "react";
import axios from "axios";

export default class MovieDelete extends React.Component {
  state = {
    id: 0
  };
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleSubmit = (event) => {
   // event.preventDefault(); //prevent browser from auto refresh

    const user = { id: this.state.id };
    const myUrl = "http://127.0.0.1:8000/api/movies/";
    const str = myUrl + user.id;
    console.log(str);
    axios.delete(str).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="text" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit" onClick="handleSubmit()"> Delete</button>
      </form>
    );
  }
}