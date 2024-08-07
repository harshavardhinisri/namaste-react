import UserContext from "../utils/UserContext.js";
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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h4 className="text-bold">{loggedInUser}</h4>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First"} location={"India"} />
        <UserClass name={"Second"} location={"India"} />
      </div>
    );
  }
}
export default About;
