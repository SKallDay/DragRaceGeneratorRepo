import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ModalLauncher from './ModalLauncher';
import QuesctionModal from './QuestionModal';

class App extends Component {
  componentDidMount(){
    axios.get('http://www.nokeynoshade.party/api/seasons/12/queens')   
      .then(({data}) => {
        console.log(data);

      });
  }
   render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">So You Want to be an Allstar?</h1>
            <h2> Find out which RuPaul Dragrace Allstar you are !</h2>
        </header>
        <section>
            <ModalLauncher/>
            <QuesctionModal/>
            <QuesctionModal />
            <QuesctionModal />
        </section>
      </div>
    );
  }
}

export default App;
