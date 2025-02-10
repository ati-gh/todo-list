import { BrowserRouter, Route, Routes } from "react-router";

import ToDo from "../../components/ToDo/ToDo";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
