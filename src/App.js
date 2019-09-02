import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from './store'
import './App.css';
import Nav from './components/Nav'
import ImageInputsContainer from './containers/ImageInputsContainer'
import ImagesContainer from './containers/ImagesContainer'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav/>
        <ImageInputsContainer/>
        <ImagesContainer/>
      </Provider>
    </div>
  );
}

export default App;
