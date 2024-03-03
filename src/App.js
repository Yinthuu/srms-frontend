import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddNewStudents from './Students/AddNewStudents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentsList from './Students/StudentsList';
import AddNewCourses from './Courses/AddNewCourses';
import CoursesList from './Courses/CoursesList';
import AddNewResults from './Results/AddNewResults';
import ResultsList from './Results/ResultsList';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <Navbar />
            </div>
            <div className="col">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addnewstudents" element={<AddNewStudents />} />
                <Route exact path="/studentslist" element={<StudentsList />} />
                <Route exact path="/addnewcourses" element={<AddNewCourses />} />
                <Route exact path="/courseslist" element={<CoursesList />} />
                <Route exact path="/addnewresults" element={<AddNewResults />} />
                <Route exact path="/resultslist" element={<ResultsList />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
