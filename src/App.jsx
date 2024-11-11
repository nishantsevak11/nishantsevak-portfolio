import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Use HashRouter here
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContactUs from './components/ContactUs';

import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <Router> {/* Changed from BrowserRouter to HashRouter */}
      <div className='flex flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
