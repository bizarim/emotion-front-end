import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Layout from './layout/Layout';
import Footer from './footer/Footer';

interface Props {

}

const App: React.FC<Props> = () => {
  return (
    <Router>
      <div>
        <Header />
        <Layout />
      </div>
    </Router>
  );
}

export default App

