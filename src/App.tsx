import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUsers from "./staff/AddUsers";
import EditStaff from "./staff/EditStaff";
import ViewUser from "./staff/ViewStaff";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="/edituser/:id" element={<EditStaff />} />
          <Route path="/viewstaff/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
