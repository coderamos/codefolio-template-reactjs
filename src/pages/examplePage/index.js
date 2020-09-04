import React from 'react';

import ExampleComponent from '~/components/exampleComponent';

import * as s from './styles';

export default function Home() {
  return (
    <s.ExampleContainer>
      <ExampleComponent>template-reactjs/</ExampleComponent>
    </s.ExampleContainer>
  );
}
