import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from './features/notes/CreateNote'
import ReadNote from './features/notes/ReadNotes'
import UpdateNote from './features/notes/UpdateNote'
import Layout from './components/Layout'
import Home from './components/Home'
import Prefetch from "./features/auth/Prefetch";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<Prefetch />} >
            <Route path="notes" >
                <Route path="createNote" element={<CreateNote />} />
                <Route path="readNotes" element={<ReadNote />} />
                <Route path=":id" element={<UpdateNote />} />
            </Route>
            </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
