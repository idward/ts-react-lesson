import React, { PureComponent } from 'react';

class App extends PureComponent {
          sum = (a: number, b: number): number => {
    return a + b;
  };

      public render() {
        return (
      <div>
             <h1>Hello {this.sum(3, 8)}</h1>
      </div>
    );
  }
}

export default App;
