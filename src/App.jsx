import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import SignupForm from './Pages/Signup/Signup';
import LoginForm from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import UserAuth from './Redux/UserAuth';
import LoginAuth from './Redux/LoginAuth';


function App() {
  

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route element={<UserAuth />}>
                <Route path="/" element={<Home />}  />
               
              </Route>
              <Route element={<LoginAuth />}>

              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
