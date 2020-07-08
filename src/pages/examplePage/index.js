import React from 'react';

import { ExampleComponent } from '~/components';
import { ExampleContainer } from '~/pages/examplePage/styles';

export default function Home() {
  return (
    <ExampleContainer>
      <ExampleComponent>template-reactjs/</ExampleComponent>
    </ExampleContainer>
  );
}
