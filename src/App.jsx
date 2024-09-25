// import { useState } from 'react'
// import Home from './router/home/Home'
// import { Route, Routes } from 'react-router-dom'
// import { Layout } from 'antd'
// import Category from './router/category/Category'
// import Cart from './router/cart/Cart'
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="category" element={<Category />} />
//         </Route>
//       </Routes>
//       <Footer/>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './router/home/Home';
import Cart from './router/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Product from './router/product/Product';

function App() {
  const [count, setCount] = useState(0);

  const AppLayout = () => (
    <Layout>
      <Outlet /> {/* Ichki yo'nalishlarni ko'rsatish */}
    </Layout>
  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


