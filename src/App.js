import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
 import Register from './components/Login';
import Reg from './components/register';
import Home from './components/home';
import ProfileCreate from './components/profile';
  
//  import NavigationBar from './components/nav';
import About from './components/about ';
import Success from './components/success';
import ProfileShow from './components/profileshow';

import Card9 from './components/success1';
import MatchingAlgorithm from './components/match';
import PaidPage from './components/piad';
import PaymentForm from './components/pay';
import Search from './components/search';
import MatchPage from './components/match';
import SignInSide from './components/search';

import Request from './components/request';
import FeedbackPage from './components/feed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/Reg" element={<Reg />}></Route>
          <Route path="/profile" element={<ProfileCreate />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/success1" element={<Card9/>}></Route>
          <Route path="/profileshow" element={<ProfileShow />}></Route>
          <Route path="/match" element={<MatchPage />}></Route>
          <Route path="/paid" element={<PaidPage />}></Route>
          <Route path="/pay" element={<PaymentForm />}></Route>
          <Route path="/search" element={<SignInSide/>}></Route>
          <Route path="/request" element={<Request/>}></Route>
          <Route path="/feed" element={<FeedbackPage/>}></Route>

        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

