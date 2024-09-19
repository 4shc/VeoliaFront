import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import { GoogleOAuthProvider } from '@react-oauth/google'; 

function App() {
  const user = false;
  const clientId = "66084045456-b7kqebo2ho7q0279e4qeo1limb9mmbda.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/UserPage" 
              element={ user ? <Navigate to="/" /> : <UserPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
