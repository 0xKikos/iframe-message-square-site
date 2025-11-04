import { BrowserRouter, Routes, Route } from "react-router";
import Square from "@/page/square";
import Create from "@/page/create";
import Detail from "@/page/detail";
import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Square />} />
          <Route path="/create" element={<Create />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

