import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy location",
      },
    };
    //console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    //console.log(this.props.name + "child render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/12824231?v=4" />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @akshaySaini</h3>
      </div>
    );
  }
}
export default UserClass;
