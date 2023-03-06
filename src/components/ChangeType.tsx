import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function checkSwapType(): void {
        type === "multiple_choice_question"
            ? setType("short_answer_question")
            : setType("multiple_choice_question");
    }

    return (
        <div>
            <Button onClick={checkSwapType}>Change Type</Button>
            {type === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
