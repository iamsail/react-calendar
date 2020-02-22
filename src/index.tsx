import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/Hello';

import Hello from './components/StatefulHello';
import Calendar from './components/Calendar';

ReactDOM.render(
  <div>
      <Hello name="TypeScript" enthusiasmLevel={10} />
      <Calendar/>
  </div>
,
  document.getElementById('app') as HTMLElement
);