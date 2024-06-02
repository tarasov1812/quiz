import {useState} from "react";
import Question from "./Question";

const Quiz = () => {
    const [currentQustionIndex, setCurrentQuestionIndex] = useState(0);
    const testClick = () => {
        setCurrentQuestionIndex(currentQustionIndex + 1);
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question/>
                <div className="next-button" onClick={testClick}>Next question {currentQustionIndex}</div>
            </div>
        </div>
    );
}

export default Quiz;