import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;