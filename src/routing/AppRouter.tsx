import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>main</div>} />
      </Routes>
    </Router>
  );
};
