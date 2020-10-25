import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
