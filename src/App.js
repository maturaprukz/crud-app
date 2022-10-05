import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="edit/:id" element={<UserEdit />} />
      </Routes>

    </div>
  );
}

export default App;
