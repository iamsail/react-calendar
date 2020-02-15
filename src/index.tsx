import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/Hello';

import Hello from './components/StatefulHello';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('app') as HTMLElement
);