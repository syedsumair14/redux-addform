import React from "react";
import { show } from "./actions";
import { connect } from "react-redux";

const showdata = props => {
  console.log(props.showReducer);
  return (
    <div className="container">
      <div className="card bg-light" style={{ width: "300px" }}>
        <div className="card-body">
          <div className="card-title">Name: {props.showReducer.Name}
          <button className="btn btn-danger ml-3">Delete</button>
          <button className="btn btn-warning ml-3">Edit</button>
          </div>
          <div className="card-header">Email: {props.showReducer.Email}</div>
          <div className="card-footer">
            Password: {props.showReducer.Password}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = (state, ownProps) => {
  console.log("SHOWPAGE: ", state);
  return state;
};

export default connect(
  mapStateToprops,
  { show }
)(showdata);
