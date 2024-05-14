import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layout/admin/AdminLayout';
import MainLayout from './layout/main/MainLayout';
import Add from './pages/adminPages/Add/Add';
import Detail from './pages/adminPages/detail/Detail';
import Product from './pages/adminPages/Products/Product';
import Update from './pages/adminPages/update/Update';
import Admin from './pages/mainPages/Admin/Admin';
import Home from './pages/mainPages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="/Admin" element={<Admin/>} />
        </Route>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Product/>} />
          <Route path="/Admin/detail" element={<Detail/>} />
          <Route path="/Admin/add" element={<Add/>} />
          <Route path="/Admin/update/:id" element={<Update/>} />
    
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
