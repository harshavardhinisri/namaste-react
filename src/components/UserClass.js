import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");
    this.state = {
      useInfo: {
        name: "Dummy",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "child did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      useInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.useInfo;
    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
      </div>
    );
  }
}
export default UserClass;
