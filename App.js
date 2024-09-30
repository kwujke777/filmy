import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="mb-3">
        <label for="film" class="form-label">tytuł filmu</label>
        <input type="text" class="form-control" id="film" />
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>wybierz menu</option>
        <option value="1">komedia</option>
        <option value="2">obyczajowy</option>
        <option value="3">sensacyjny</option>
      </select>
    </div>
  );
}

export default App;