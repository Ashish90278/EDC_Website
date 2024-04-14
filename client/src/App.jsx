import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { Aboutus } from "./pages/Aboutus.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Events } from "./pages/Events.jsx";
import { Team } from "./pages/Team.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Register } from "./pages/Register.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
// import { AdminLayout } from "./components/layouts/Admin-Layout.jsx";
import { AdminUsers } from "./components/layouts/AdminUsers.jsx";
import { AdminSidebar } from "./components/layouts/AdminSidebar.jsx";
import { AdminStudentsRegister } from "./components/layouts/AdminStudentsRegister.jsx";
import { AdminMembers } from "./components/layouts/AdminMembers.jsx";
import { AdminEvents } from "./components/layouts/AdminEvents.jsx";

export const App = () => {

  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin"element={<AdminUsers/>} />
          <Route path="/admin/users" element={<AdminUsers/>} />
          <Route path="/admin/students-register" element={<AdminStudentsRegister/>} />
          <Route path="/admin/members" element={<AdminMembers/>} />
          <Route path="/admin/events" element={<AdminEvents/>} />
          {/* <Route path="/admin"element={<AdminLayout/>} >
            <Route path="users" element={<AdminUsers/>} />
            <Route path="registrations" element={<AdminRegistrations/>} />
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}