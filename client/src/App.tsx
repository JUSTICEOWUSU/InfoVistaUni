import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route index element={  <h1>hello new gis app</h1>}/>
      </Routes>
    </Router>
  );
}

export default App
