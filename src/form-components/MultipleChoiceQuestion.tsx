import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="selectAnswer">
                    <Form.Label>Select your answer:</Form.Label>
                    <Form.Select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <span>{selected === expectedAnswer ? "✔️" : "❌"}</span>
            </div>
        </div>
    );
}
