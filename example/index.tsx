import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'tes-component-library';
import 'tes-component-library/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Button text="Click me"></Button>
      <Button text="Cancel" variant="secondary"></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
