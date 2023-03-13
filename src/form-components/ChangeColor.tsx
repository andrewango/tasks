import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "black",
        "white"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name={color}
                        onChange={(e) => setChosenColor(e.target.value)}
                        id={color}
                        label={color}
                        key={color}
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
                <br></br>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${chosenColor}` }}
                >
                    {chosenColor}
                </span>
                ! Awesome choice!
            </div>
        </div>
    );
}
