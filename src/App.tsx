import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNavigation } from './components/BottomNavigation/BottomNavigation';
import { Workouts } from './pages/Workouts/Workouts';
import { WorkoutDetail } from './pages/WorkoutDetail/WorkoutDetail';
import { Diet } from './pages/Diet/Diet';
import { Videos } from './pages/Videos/Videos';
import { Routine } from './pages/Routine/Routine';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Workouts />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/routine" element={<Routine />} />
        </Routes>
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
