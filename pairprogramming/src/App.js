import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header"; 
import Home from "./pages/Home/Home";
import Person from "./pages/Person/Person";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
