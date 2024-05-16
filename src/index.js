import React from 'react'
import { createRoot } from 'react-dom/client';
import styles from './index.less'
class App extends React.Component {
  render() {
    return (
      <div id={styles.root}>
        react
      </div>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);