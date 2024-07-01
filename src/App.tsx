import { Route, Routes } from "react-router-dom";

import QuizPage from "@/pages/quizPage";
import { QuizSummaryPage } from "./pages/quizSummaryPage";


function App() {
  return (
    <Routes>
      <Route element={<QuizPage />} path="/" />
      <Route element={<QuizSummaryPage/>} path="/summary"/>
    </Routes>
  );
}

export default App;
