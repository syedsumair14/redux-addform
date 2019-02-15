import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Add } from './actions';
import { connect } from 'react-redux';

class FormPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Password: ''
    }
    this.nameInput=React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }
  submit = () => {
    console.log("SUBMIT Clicked");
    console.log(this.nameInput.current.value, this.emailInput.current.value, this.passwordInput.current.value);
    this.setState({
      Name: this.nameInput.current.value,
      Email: this.emailInput.current.value,
      Password: this.passwordInput.current.value,
    }, ()=> this.props.Add(this.state.Name, this.state.Email, this.state.Password));
  
  }
  render() {
    // console.log(this.nameInput.current.value)
    console.log("PROPS OF FOR PAGE", this.props)
    return (
      <div className="container">
        <Form onSubmit={(e) => {e.preventDefault()}}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" ref={this.nameInput} required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref={this.emailInput} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={this.passwordInput} placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" required />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.submit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state
}

export default connect(mapStateToProps, {Add})(FormPage);
