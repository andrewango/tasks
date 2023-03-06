import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎁" | "🧧" | "🥮" | "🦃" | "🤱";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🧧");

    function chooseAlphabetically(): Holiday {
        let rotatedHoliday: Holiday = "🎁";
        if (holiday === "🎁") {
            rotatedHoliday = "🧧";
        } else if (holiday === "🧧") {
            rotatedHoliday = "🥮";
        } else if (holiday === "🥮") {
            rotatedHoliday = "🤱";
        } else if (holiday === "🤱") {
            rotatedHoliday = "🦃";
        } else if (holiday === "🦃") {
            rotatedHoliday = "🎁";
        }
        return rotatedHoliday;
    }

    function chooseChronologically(): Holiday {
        let rotatedHoliday: Holiday = "🧧";
        if (holiday === "🧧") {
            rotatedHoliday = "🤱";
        } else if (holiday === "🤱") {
            rotatedHoliday = "🥮";
        } else if (holiday === "🥮") {
            rotatedHoliday = "🦃";
        } else if (holiday === "🦃") {
            rotatedHoliday = "🎁";
        } else if (holiday === "🎁") {
            rotatedHoliday = "🧧";
        }
        return rotatedHoliday;
    }

    function rotateAlphabetically(): void {
        setHoliday(chooseAlphabetically());
    }

    function rotateChronologically(): void {
        setHoliday(chooseChronologically());
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <br></br>
            <button onClick={rotateAlphabetically}>Advance by Alphabet</button>
            <button onClick={rotateChronologically}>Advance by Year</button>
        </div>
    );
}
