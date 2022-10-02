import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dangnhap from '../userpage/Dangnhap';
import Lienhe from '../userpage/Lienhe';
import Sach from '../userpage/Sach';
import Trangchu from '../userpage/Trangchu';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Trangchu></Trangchu>} />
          <Route path="/sach" element={<Sach></Sach>} />
          <Route path="/lienhe" element={<Lienhe></Lienhe>} />
          <Route path="/dangnhap" element={<Dangnhap></Dangnhap>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;