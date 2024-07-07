import { Route, Routes } from "react-router-dom";

import QuizPage from "@/pages/quizPage";
import { QuizSummaryPage } from "./pages/quizSummaryPage";
import { HomePage } from "./pages/home";
import { LearnCards } from "./pages/learnCards";
import { QuizMain } from "./pages/quizMain";


function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<QuizMain/>} path="/quiz"/>
      <Route element={<QuizPage />} path="/quiz/:param" />
      <Route element={<QuizSummaryPage/>} path="/summary"/>
      <Route element={<LearnCards />} path="/learn/cards"/>
    </Routes>
  );
}

export default App;
