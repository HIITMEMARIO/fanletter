import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

const Router = ({ list, setList }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home list={list} setList={setList} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail list={list} setList={setList} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
