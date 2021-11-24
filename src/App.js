import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Loadable from 'react-loadable';

function Loading(props) {
  if (props.pastDelay) {
    return <div>loading...</div>
  } else {
    return null
  }
}
const ProductList = Loadable({
  loader: () => import('./components/products/ProductList'),
  loading: Loading,
  delay: 200
})
const ProductPage = Loadable({
  loader: () => import('./components/products/ProductPage'),
  loading: Loading,
  delay: 200
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div className='App'>
                <Route exact path='/' component={ProductList} />
                <Route exact path='/:id' component={ProductPage} />
            </div>
          </Router>
        </PersistGate>
      </Provider>

  );
}
}

export default App;
