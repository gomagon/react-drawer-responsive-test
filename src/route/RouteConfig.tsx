import { memo, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../page/Header";
import { Page404 } from "../page/Page404";
import { Test1 } from "../page/Test1";
import { Test2 } from "../page/Test2";
import { Test3 } from "../page/Test3";

export const RouteConfig: FC = memo(() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Header />}>
            <Route path={"test1"} element={<Test1 />} />
            <Route path={"test2"} element={<Test2 />} />
            <Route path={"test3"} element={<Test3 />} />
          </Route>
          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
});
