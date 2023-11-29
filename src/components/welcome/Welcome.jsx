import React from "react";
import Quiz from "../../img/quiz.svg";
import "./Welcome.css";
import { QuizContext } from "../../context/quiz.jsx";
import { useContext } from "react";

export default function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem vindo.</h2>
      <p>Clique no botão abaixo para começar.</p>
      <button onClick={() => {dispatch({type: "CHANGE_STATE"})}}>Iniciar</button>
      <img src={Quiz} alt="welcome" />
    </div>
  );
}
