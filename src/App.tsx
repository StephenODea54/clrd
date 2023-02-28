import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Home } from "./components/home/index";
import { Registration } from "./components/registration/index";
import { Schedule } from "./components/schedule/index";
import { Calendar } from "./components/calendar/index";

function App() {
  return (
    <div className="app font-proxima-nova-regular">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
