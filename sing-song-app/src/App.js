import { Route } from "react-router-dom"
import { useState } from "react";


import './App.css';
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import PostGig from "./components/PostGig.jsx";
import ShowGig from "./components/ShowGig.jsx";


function App() {
  const [toggleFetch, setToggleFetch] = useState(true);

  return (
    <div>
      <Nav />
      <main>
        <Route path="/" exact >
          <Home />
        </Route>

        <Route path="/post" >
          <PostGig 
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/gigs" exact >
          <ShowGig
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/about" >
          <About />
        </Route>
      </main>
    </div>
  );
}

export default App;
