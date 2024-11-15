import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home"
import { NotFound } from "./NotFound"
import { SignUp } from "./SignUp";
import { SignIn } from "./Signin";


export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);