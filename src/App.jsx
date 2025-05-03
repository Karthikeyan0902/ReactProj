import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Counter from './Views/Counter';
import TodoList from './Views/TodoList';
import Signup from './Views/Signup';
import Login from './Views/Login';
import AuthPage from './Views/AuthPage';
import Home from './Views/Home';
import Layout from './Components/Layout';
import SearchFilter from './Views/SearchFilter';
import Stopwatch from './Views/Stopwatch';
import ThemePage from './Views/ThemePage';
import FocusInput from './Views/FocusInput';
import FindingBar from './Components/FindingBar'

function App() {

  return (
    <>
      <Router>
        <FindingBar/>
      <Routes>
        <Route path='/Lay' element={<Layout />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<AuthPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<SearchFilter />} />
        <Route path='/Stopwatch' element={<Stopwatch />} />
        <Route path='/theme' element={<ThemePage />} />
        <Route path='/Focus' element={<FocusInput  />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
