import { Route, Routes } from "react-router-dom";

import QuizPage from "@/pages/quizPage";
import { QuizSummaryPage } from "./pages/quizSummaryPage";
import { HomePage } from "./pages/home";
import { SubjectPage } from "./pages/subjectPage";
import { LearnCards } from "./pages/learnCards";
import { QuizMain } from "./pages/quizMain";


function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<QuizMain/>} path="/learn"/>
      <Route element={<SubjectPage/>} path="/learn/:subject"/>
      <Route element={<QuizPage />} path="/quiz/topic/:topicId" />
      <Route element={<QuizSummaryPage/>} path="/summary"/>
      <Route element={<LearnCards />} path="/learn/cards"/>
    </Routes>
  );
}

export default App;
