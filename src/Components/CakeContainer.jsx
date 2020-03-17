import React, { Component } from "react";
import { buyCake } from "../Redux/Cake/CakeActions";
import { connect } from "react-redux";

class CakeContainer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Number of cakes: {this.props.numOfCakes}</h2>
        <button onClick={this.props.buyCake}>Buycake</button>
      </React.Fragment>
    );
  }
}

//state is redux's state parameter
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};

//dispatch is a react redux method
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
