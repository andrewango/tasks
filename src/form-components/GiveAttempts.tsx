import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numRemaining, setNumRemaining] = useState<number>(3);
    const [numRequesting, setNumRequesting] = useState<number>(0);

    function updateNumRequesting(event: React.ChangeEvent<HTMLInputElement>) {
        const convertedInt = parseInt(event.target.value);
        Number.isNaN(convertedInt)
            ? setNumRequesting(0)
            : setNumRequesting(convertedInt);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {numRemaining}.</div>
            <div>
                <Form.Group controlId="RequestAttemptsForm">
                    <Form.Label>
                        Type in your number of requested attempts:
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={numRequesting}
                        onChange={updateNumRequesting}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setNumRemaining(numRemaining - 1)}
                    disabled={numRemaining === 0 ? true : false}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setNumRemaining(numRemaining + numRequesting)
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
