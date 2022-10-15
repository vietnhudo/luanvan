import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dangky from '../userpage/Dangky';
import Dangnhap from '../userpage/Dangnhap';
import Lienhe from '../userpage/Lienhe';
import Sach from '../userpage/Sach';
import Trangchu from '../userpage/Trangchu';
import Baiviet from '../userpage/Baiviet';
import Chitietbaiviet from '../userpage/Chitietbaiviet';
import Chitietsach from '../userpage/Chitietsach';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Trangchu></Trangchu>} />
          <Route path="/sach" element={<Sach></Sach>} />
          <Route path="/chitietsach" element={<Chitietsach></Chitietsach>} />
          <Route path="/lienhe" element={<Lienhe></Lienhe>} />
          <Route path="/dangnhap" element={<Dangnhap></Dangnhap>} />
          <Route path="/dangky" element={<Dangky></Dangky>} />
          <Route path="/baiviet" element={<Baiviet></Baiviet>} />
          <Route path="/chitietbaiviet" element={<Chitietbaiviet></Chitietbaiviet>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
