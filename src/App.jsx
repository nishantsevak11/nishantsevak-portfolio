import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;