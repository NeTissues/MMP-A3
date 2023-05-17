import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from "./pages/home/Home";

function App() {
  return (
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
  );
}

export default App;