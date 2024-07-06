import { Route, Routes } from "react-router-dom";

import QuizPage from "@/pages/quizPage";
import { QuizSummaryPage } from "./pages/quizSummaryPage";
import { HomePage } from "./pages/home";


function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<QuizPage />} path="/quiz" />
      <Route element={<QuizSummaryPage/>} path="/summary"/>
    </Routes>
  );
}

export default App;
