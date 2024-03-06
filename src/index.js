
import ReactDOM from 'react-dom/client';
import Counter from '../src/Counter';
import Header from '../src/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <Counter></Counter>
  </div>

);

