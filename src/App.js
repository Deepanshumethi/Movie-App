
import './App.css';
import Allmoviepage from './Pages/Allmoviepage';
import Main from './Pages/Main.js';
import Moviepage from './Pages/Moviepage';
import ScrollToTop from './ScrolltoTop'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

<ScrollToTop />
     

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/MovieDetails' element={<Moviepage/>}/>
        <Route path='/Allmovielist' element={<Allmoviepage/>}/>
      </Routes>

    </div>
  );
}

export default App;
