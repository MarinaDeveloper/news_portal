import React from 'react';
import { BrowserRouter } from "react-router-dom";

import AppContent from 'components/AppComponent';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;
