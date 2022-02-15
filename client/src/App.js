
import './App.css';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      <Routes>
        <Route exact path="/" element= {<HomePage/>}>  
        </Route>
        <Route path="/projects" element= {<ProjectListPage/>}>  
        </Route>
        <Route path="/projects/:id" element= {<ProjectDetailsPage/>}>        
        </Route>
        <Route path="/projects/edit/:id" element= {<EditProjectPage/>}>
        </Route>
        <Route path="/signup" element= {<SignUpPage/>}>
        </Route>
         
      </Routes>
      
    </div>
  );
}

export default App;
