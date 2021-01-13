import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import styles from "./App.module.css"


class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Sean", age: 31},
      { id: 2, name: "Doobie", age: 30},
      { id: 3, name: "Willie", age: 51},
      { id: 4, name: "Bob", age: 71},
    ],
    showPersons: false
  };

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  
  toggleShowHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (event, index) => {
    event.preventDefault();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  render() {

    let btnClass = [styles.Button]
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.changedNameHandler(event, person.id)}
              click={(event) => this.deletePersonHandler(event, index)}
              />
            )
          })}
        </div>
      );
      btnClass.push(styles.Green)
    };

    const pClass = [];
    if (this.state.persons.length <= 2) {
      pClass.push(styles.Banana);
    }
    if (this.state.persons.length <= 1) {
      pClass.push(styles.Bold)
    }

    return (
      <div className={styles.App}>
        <h1>I'm a React App</h1>
        <p className={pClass.join(" ")}>These are some characters</p>
        <button className={btnClass.join(" ")} onClick={this.toggleShowHandler}>Turn me on</button>
        {persons}
      </div>
    )
  }
}

export default App;
