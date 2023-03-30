import React from "react";
//types
import {AnswerObject} from '../App';
//syles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard = ({question, answers, callback, userAnswer, questionNr, totalQuestions}: QuestionCardProps) => {
    return (
        <Wrapper>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
                      <>
                {console.log(`answer: ${answer}`)}
                {console.log(userAnswer)}
                
        <ButtonWrapper
          key={answer}
          correct={userAnswer ? userAnswer.correct_answer === answer : false }
        //   userClicked={userAnswer?}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
        </>
      ))}
    </div>
  </Wrapper>)
};

export default QuestionCard;