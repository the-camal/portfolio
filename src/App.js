import { BrowserRouter as router, Routes, route } from 'react-router-dom';
import './App.css';
import home from './pages/home';
import skills from './pages/repos';
import repos from './pages/skills';
import  navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
    <router>
      <navbar />
      <Routes>
        <route path="/" element={<home />} />
        <route path="/repos" element={<repos />} />
        <route path="/skills" element={<skills />} />
      </Routes>
    </router>
    </div>
  );
}

export default App;
