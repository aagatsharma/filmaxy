import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Movies, MovieInformation, Actors, Profile } from "./pages";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="p-10">
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
