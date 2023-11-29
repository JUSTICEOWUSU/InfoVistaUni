import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import HomePage from './pages/homePage/homePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <HomePage/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
