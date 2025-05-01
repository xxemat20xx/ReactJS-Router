# React JS Router

//NOTES: <br /> 
Route Path = 'match the URL bar' <br />
Route Element = Component

```js
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<div>HOME PAGE</div>} />
        <Route 
        path='testing' 
        element={<div> 
                    <h2>testing</h2>
                </div>} />
     
    <Routes/>

    <BrowserRouter/>

}
```
### Components
```js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route 
              path='/' 
              element={<Home/>}/>

              <Route 
              path='about' 
              element={<About/>}/>

              <Route 
              path='products' 
              element={<Products/>}/>

          </Routes>
      </BrowserRouter>
  )
}

export default App
```


### Links
- Home.jsx, About.jsx
```js
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about" className='btn'>About</Link>
    </div>
  )
}
s
```

### Error page
Path: Error.jsx
```js
import React from 'react'
import { Link } from 'react-router'
const Error = () => {
  return (
    <div>
        <h2>404</h2>
        <p>page not found</p>
        <Link to='/' className='btn'>Back home</Link>
    </div>
  )
}

export default Errors
```

### Nested Pages

```js
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route 
              path='/' 
              element={<Home/>}>

              <Route 
              path='about' 
              element={<About/>}/>

              <Route 
              path='products' 
              element={<Products/>}/>

              <Route 
              path='*' 
              element={<Error/>}/>
              </ Route>

              <Route path='dashboard' element={<div>dashboard</div>}>
                    <Route path='stats' element={<div>stats</div>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
```

### Shared Layout
- Home.jsx

```js
import React from 'react'
import { Link, Outlet } from 'react-router'
import Navbar from './Navbar'
const SharedLayout = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>

   </>
  )
}

export default SharedLayout
```

### Index
- App.jsx
```js
      <BrowserRouter>
          <Routes>
              <Route 
              path='/' 
              element={<SharedLayout/>}>
              
              <Route 
              index
              element={<Home/>}/>

              <Route 
              path='about' 
              element={<About/>}/>

              <Route 
              path='products' 
              element={<Products/>}/>

              <Route 
              path='*' 
              element={<Error/>}/>
              </ Route>

          </Routes>
      </BrowserRouter>
```
### NavLink (style)

- StyledNavbar.js

```js
import React from 'react'
import { NavLink } from 'react-router'
const StyledNavbar = () => {
  return (
    <nav className='navbar'>
    <NavLink to="/" style={({isActive})=>{
        return {color:isActive? 'red': 'grey'};
    
    }}>Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>
    </nav>
  )
}

export default StyledNavbar
```

### NavLink (className)
-StyledNavbar.jsx
CSS
.link.active{
  color: red;
}
.link{
  color: grey;
}
```js
import React from 'react'
import { NavLink } from 'react-router'
const StyledNavbar = () => {
  return (
    <nav className='navbar'>
    <NavLink to="/" 
    className={({isActive})=>isActive?"link active" : "link"}>Home</NavLink>

    <NavLink to="/about" 
    className={({isActive})=>isActive?"link active" : "link"}>About</NavLink>

    <NavLink to="/products" 
    className={({isActive})=>isActive?"link active" : "link"}>Products</NavLink>
    </nav>
  )
}

export default StyledNavbar
```

### Reading URL Params

-App.jsx

```js
 <BrowserRouter>
          <Routes>
    
              <Route 
              path='products' 
              element={<Products/>}/>

             <Route 
              path='products/:productId' 
              element={<SingleProduct/>}/>

          </Routes>
      </BrowserRouter> 
```

### Single Product

-SingleProduct.jsx

```js
import React from 'react'
import { Link, useParams } from 'react-router'
const SingleProduct = () => {
    console.log(useParams());
    const {productId} = useParams();
  return (
    <div>
        <h2>Product {productId}</h2>
        <Link to="/products" className='btn'>Back to products</Link>
    </div>
  )
}

export default SingleProduct
```