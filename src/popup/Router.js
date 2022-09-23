import React from 'react'
import { BrowserRouter, Routes, Route , MemoryRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Note from './pages/Note';



function Router() {
  return (
    <MemoryRouter>
    {/* Loading Page
    {loading && <Loading />}  */}

        <Routes>
            {/* HomePage */}
            <Route exact path="/" element={<Home/>} />
            {/* <Route path="/test" element={<App />} /> */}
            <Route path="/note" element={<Note />} />
        </Routes>
</MemoryRouter>
  )
}

export default Router