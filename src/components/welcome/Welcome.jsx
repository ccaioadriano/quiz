import React from "react";
import Quiz from "../../img/quiz.svg";
import "./Welcome.css";
import { QuizContext } from "../../context/quiz.jsx";
import { useContext } from "react";
export default function Welcome() {
  const quizState = useContext(QuizContext);

  console.log(quizState.name);
  return (
    <div id="welcome">
      <h2>Seja bem vindo.</h2>
      <p>Clique no botão abaixo para começar.</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="welcome" />
    </div>
  );
}
