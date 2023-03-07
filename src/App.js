import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import JSProjects from "./Pages/JSProjects";
import NotFound from "./Pages/NotFound";
import Orders from "./Pages/Orders";
import Post from "./Pages/Post";
import PostList from "./Pages/PostList";
import Projects from "./Pages/Projects";
import ReactProjects from "./Pages/ReactProjects";
import VueProjects from "./Pages/VueProjects";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Orders/>}/>
        <Route path="/post" element={<PostList/>}/>
        <Route path="/post/:postId" element={<Post/>}/>
        <Route path="/projects" element={<Projects/>}>
            {/* <Route path="react" element={<ReactProjects/>}/>    */}
            <Route index element={<ReactProjects/>}/>   
            <Route  path="js" element={<JSProjects/>}/>
            <Route path="vue" element={<VueProjects/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
}

export default App;
