import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/Movies/Movies';
import SearchForm from './components/searchForm/SearchForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Movies />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
