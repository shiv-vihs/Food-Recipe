import React, { Component } from "react";
export const MyContext = React.createContext();

class MyProvider extends Component {
  state = { enteredEmail: "" };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setLoginEmail: (emailEntered) =>
            this.setState({ enteredEmail: emailEntered }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
