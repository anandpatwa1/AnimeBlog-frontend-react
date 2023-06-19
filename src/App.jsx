import Navbar from "./components/Navbar"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"


function App() {

  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
