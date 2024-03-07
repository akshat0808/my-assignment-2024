import React from 'react';
import './App.css';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import DashboardPage from './DashboardPage';
import PrivateRoute from './PrivateRoute';

function App() {
  const authenticated = useSelector((state: RootState) => state.authState.authenticated);

  return (
    <Router>
      <div className="bg-gray-200 p-4">
        <Routes>
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                authenticated={authenticated}
                redirectPath="/signin"
              />
            }
          >
            <Route path='/dashboard' element={<DashboardPage/>}/>
          </Route>
          {/* Add more routes as needed */}
          <Route path="/" element={<Navigate to="/signin" />} />        </Routes>
      </div>
    </Router>
  );
}

export default App;