import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Channel from "./pages/Channel";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import History from "./pages/History";
import Categories from "./pages/Categories";
import Channels from "./pages/Channels";
import Subscriptions from "./pages/Subscriptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/history" element={<History />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
