// import React, {Component} from 'react';

// class Form extends Component {
//     constructor(props) {
//         super(props);

//         this.initialState = {
//             name: '',
//             job: ''
//         };

//         this.state = this.initialState;
//     }

//     handleChange = event => {
//         const { name, value } = event.target;

//         this.setState({
//             [name] : value
//         });
//     }

//     onFormSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleSubmit(this.state);
//         this.setState(this.initialState);
//     }

//     render() {
//         const { name, job } = this.state;

//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <label for="name">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={name}
//                     onChange={this.handleChange} />
//                 <label for="job">Job</label>
//                 <input
//                     type="text"
//                     name="job"
//                     id="job"
//                     value={job}
//                     onChange={this.handleChange} />
//                 <button type="submit">
//                     Submit
//                 </button>
//             </form>
//         );
//     }
// }

// export default Form;

import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  //Now in Form, we'll create a method called submitForm() that will call that function, and pass the Form state through as the character parameter we defined earlier. It will also reset the state to the initial state, to clear the form after submit.

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
