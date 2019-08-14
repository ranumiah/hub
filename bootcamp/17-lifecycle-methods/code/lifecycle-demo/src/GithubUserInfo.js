import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  //async version
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let user = response.data;
    this.setState({ user });
  }
  //     componentDidMount(){
  //         axios.get('https://api.github.com/users/elie')
  //          .then(response => {
  //              let user = response.data
  //              this.setState({ user });
  //          });
  //    }

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.avatar_url} />
      </div>
    );
  }
}

export default GithubUserInfo;
