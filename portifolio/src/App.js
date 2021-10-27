import React, { Component } from 'react';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const ComponetnClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('ComponetnClassInstance', ComponetnClassInstance);


//element is the smallest block
//components are many elements togtether
class App extends Component {
  state = { displayBio: false };

  // constructor(){ //gets fired when an instance of the class is created
  //   super(); 
  //   this.state = { displayBio: false };
  //   console.log('Component this', this);

  //   //produc ces a new function that is the result of creating as funtion that has this object
  //   //from the component bound to this readMore function
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }


  toggleDisplayBio = () => {
    this.setState( { displayBio: !this.state.displayBio } );
  }

  render () {
    // const bio = 

    //check
    // if (this.state.displayBio === false) { //!this.state.displayBio
    //   bio = null;
    // }

    return(
      <div>
        <h1>Hello</h1>
        <p>My name is Jonathan im a software dev</p>
        {
          this.state.displayBio ? ( //never reassigned
            <div>
              <p>I live in Oakville, and code very day.</p>
              <p>My favorite language is Javascript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and "piamontese rice".</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;