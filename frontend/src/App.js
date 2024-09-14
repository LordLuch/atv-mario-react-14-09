import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEditoras from './components/Editora/ListEditora';
import AddEditora from './components/Editora/AddEditora';
import ReadEditora from './components/Editora/ReadEditora';
import UpdateEditora from './components/Editora/UpdateEditora';
import ListCategoria from './components/Categoria/ListCategoria';
import AddCategoria from './components/Categoria/AddCategoria';
import ReadCategoria from './components/Categoria/ReadCategoria';
import UpdateCategoria from './components/Categoria/UpdateCategoria';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/editora" element={<ListEditoras />} />
            <Route path="/addEditora" element={<AddEditora />} />
            <Route path="/readEditora/:id" element={<ReadEditora />} />
            <Route path="/updateEditora/:id" element={<UpdateEditora />} />
            <Route path="/categoria" element={<ListCategoria />} />
            <Route path="/addCategoria" element={<AddCategoria />} />
            <Route path="/readCategoria/:id" element={<ReadCategoria />} />
            <Route path="/updateCategoria/:id" element={<UpdateCategoria />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;