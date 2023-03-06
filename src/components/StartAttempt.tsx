import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [status, setStatus] = useState<boolean>(false);

    function changeStatus(): void {
        if (status === false) {
            setStatus(true);
            setNumAttempts(numAttempts - 1);
        } else {
            setStatus(false);
        }
    }

    return (
        <div>
            <div>
                Attempts remaining: <span>{numAttempts}</span>
            </div>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempts + 1)}
                    disabled={status}
                >
                    Mulligan
                </Button>
            </div>
            <br></br>
            <div>
                <Button
                    onClick={changeStatus}
                    disabled={status || numAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={changeStatus} disabled={!status}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
