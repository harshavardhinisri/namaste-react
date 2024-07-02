import UserClass from "./UserClass";
import React from "react";
//import { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass name={"First"} location={"Dehradun"} />
      </div>
    );
  }
}
export default About;
