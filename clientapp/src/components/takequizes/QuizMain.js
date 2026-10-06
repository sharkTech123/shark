import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";

export default function QuizMain() {
  return (
    <div className={styles.quizStartDiv}>
      <section className={styles.startQuizSection}>
        <h2>THEORY TRAINING - MOCK TEST</h2>
        <h3>50 Questions</h3>
        <p>
          See the navigation bar at the top, It helps to move back and forth
          between questions easily. After skipping a question its box remains
          black and indicates that you haven't answered it.
        </p>
        <Link to="/quizModuleId/:id">
          <button>Start Quiz</button>
        </Link>
      </section>
    </div>
  );
}
