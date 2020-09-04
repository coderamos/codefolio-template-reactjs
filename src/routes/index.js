import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ExamplePage from '~/pages/examplePage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={ExamplePage} exact />
    </BrowserRouter>
  );
}
