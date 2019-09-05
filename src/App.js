import React, {Component} from 'react';
import firebase from './firebase';
import JournalForm from './JournalForm';
import './App.css';

// set state
class App extends Component {
  constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      journal: [],
      date: '',
      firstThanks: '',
      secondThanks: '',
      thirdThanks: '',
    }
  }

// once page is loaded
  componentDidMount() {
    this.state.dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({
          entry: data[key],
          id: key
        });
      }
      this.setState({
        journal: newState
      });

      console.log(response.val());
    });
  };

  // handle input change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // handle click event
  handleClick = (event) => {
    event.preventDefault();
    this.state.dbRef.push({
      'date': this.state.date,
      'firstThanks': this.state.firstThanks,
      'secondThanks': this.state.secondThanks,
      'thirdThanks': this.state.thirdThanks
    });
    this.setState ({
      date: '',
      firstThanks: '',
      secondThanks: '',
      thirdThanks: '',
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Gratitude Journal</h1>
          <JournalForm 
            handleChange={this.handleChange} 
            handleClick={this.handleClick} 
          />

          <ul>
            {this.state.journal.map(entry => {
              return (
                <li>
                  <h2>{entry.entry.date}</h2>
                  <ol>
                    <li>{entry.entry.firstThanks}</li>
                    <li>{entry.entry.secondThanks}</li>
                    <li>{entry.entry.thirdThanks}</li>
                  </ol>
                </li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default App;
