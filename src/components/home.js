import React from "react";
import ReactTable from 'react-table';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    
    state = {
        Data: []
    }
    componentDidMount(){
        console.log("DID MOUNT", this.props.Data)
        this.setState({
            Data: this.props.Data
        })
    }
    render(){
    let columns = [
        {
            Header: "Name",
            accessor: "Name",
            Cell: "HELLO",
            Aggregated: true
        },
        {
            Header: "Email",
            accessor: "Email"
        },
        {
            Header: "Password",
            accessor: "Password"
        }
    ]
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="offset-3" style={{ color: "purple" }}>
          Welcome to DataBase!
        </h1>
      </div>
      <button className="btn offset-5"><NavLink className="btn btn-success" to="/form">Add More!</NavLink></button>
      <ReactTable 
      columns={columns}
      data={this.state.Data}
      noDataText="No Data To Show"
      />
    </div>
  );
}
}

const mapStateToProps = (state) => {
    console.log("Home ka state",state.reduce)
    return state.reduce
}


export default connect(mapStateToProps)(Home);
