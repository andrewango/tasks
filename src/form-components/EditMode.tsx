import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {inEdit === false && isStudent === true ? (
                    <span>{name} is a student.</span>
                ) : inEdit === false && isStudent === false ? (
                    <span>{name} is not a student.</span>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="in-edit-switch"
                    label="Toggle Edit Mode"
                    checked={inEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInEdit(event.target.checked)
                    }
                />
            </div>
            <div>
                {inEdit === true ? (
                    <Form.Group controlId="NameForm">
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                {inEdit === true ? (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
