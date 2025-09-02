import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";
import { motion } from "framer-motion";
import SearchBar from "./components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";

function App() {
  return(
    <div>
      <Outlet />
    </div>
  )
}

export default App;
