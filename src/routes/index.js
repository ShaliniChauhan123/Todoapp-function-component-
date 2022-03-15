import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Me from "./Me";
import PageNotFound from "./PageNotFound";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Todo />} />
        <Route path="/shalini" element={<Me />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
