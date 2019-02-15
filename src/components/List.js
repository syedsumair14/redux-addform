import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { show } from './actions';
import { NavLink } from 'react-router-dom';

class List extends React.Component {
 state = {
   profile: [] 
 }
 loadData = () => {
  this.setState({
    profile: this.props.reduce.Data
  })
 }

 view = (id) => {
   this.props.show(id.original)
 }
  render() {
    console.log("JO AAYA", this.props.reduce.Data)
    let columns = [
      {
        Header: "Name",
        accessor: "Name"
      },
      {
        Header: "Emails",
        accessor: "Email"
      },
      {
        Header: "Passwords",
        accessor: "Password"
      },
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Actions",
        Cell: props => {
          return (
            <button className="btn btn-info" onClick={() => {this.view(props)}}>
            <NavLink exact to="/showData">View</NavLink>
            </button>
          );
        }
      }
    ];
    return (
      
      <div className="container">
      <button className="btn btn-warning" onClick={this.loadData}>Load Data!</button>
        <ReactTable columns={columns}  data={this.state.profile} noDataText="No Data to Show" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  console.log(state.reduce.Data);
  return state;
};
export default connect(mapStateToProps, {show})(List);
