import React, { useState, Suspense, lazy } from 'react';
import './App.css';
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
import UserList from './Views/UserList';
import ProfilePage from './Views/Profilepage';
import ProductList from './Views/ProductList';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const ProfilePage = lazy(() => import('./Views/Profilepage'));
  const ProductList = lazy(() => import('./Views/ProductList'));

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Lay' element={<Layout username={loggedInUser?.username} />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path='/' element={<AuthPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<SearchFilter />} />
        <Route path='/Stopwatch' element={<Stopwatch />} />
        <Route path='/theme' element={<ThemePage />} />
        <Route path='/Focus' element={<FocusInput />} />
        <Route path='/List' element={<UserList />} />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading Profile Page...</div>}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/Product"
          element={
            <Suspense fallback={<div>Loading Product List...</div>}>
              <ProductList />
            </Suspense>
          }
        />

      </Routes>
    </Router>
    </>
  );
}

export default App;
