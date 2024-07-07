import UserClass from "./UserClass";
import React, { Component } from "react";

class About extends React.Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name={"First"} location={"India"} />
        <UserClass name={"Second"} location={"India"} />
      </div>
    );
  }
}
export default About;
