import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from './store'
import './App.css';
import NavConatainer from './containers/NavContainer'
import ImageInputsContainer from './containers/ImageInputsContainer'
import ImagesContainer from './containers/ImagesContainer'
import AboutThisSite from './components/AboutThisSite'
import EditStylesContainer from './containers/EditStylesContainer'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavConatainer/>
        <ImageInputsContainer/>
        <ImagesContainer/>
        <AboutThisSite/>
        <EditStylesContainer/>
      </Provider>
    </div>
  );
}

export default App;
