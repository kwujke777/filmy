import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
    </div>
  );
}

export default App;
