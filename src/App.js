import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/home/Home';
import Login from './views/login/Login';
import List from './views/list/List';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Single from './views/single/Single';
import New from './views/new/New';



function App() {
    
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<List />} />
            <Route path="/users/:userId" element={<Single />} />
            <Route path="/users/:new" element={<New />} />
            <Route path="/products" element={<List />} />
            <Route path="/products/:productId" element={<Single />} />
            <Route path="/products/:new" element={<New />} />

          </Routes>
        </BrowserRouter>
      </div>
    );

}

export default App;
