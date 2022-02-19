// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     data: [],
//   };

//   //When we pull in API data, we want to use componentDidMount, because we want to make sure the component has rendered to the DOM before we bring in the data.

//   componentDidMount() {
//     const url =
//       "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

//     fetch(url)
//       .then((result) => result.json())
//       .then((result) => {
//         this.setState({
//           data: result,
//         });
//       });
//   }

//   render() {
//     const { data } = this.state;

//     const result = data.map((entry, index) => {
//       console.log(entry);
//       return <li key={index}>{entry}</li>;
//     });

//     return (
//       <div className="container">
//         <ul>{result}</ul>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default App;
