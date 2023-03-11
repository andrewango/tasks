import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    // The type is "a function that consumes a boolean and returns nothing"
    setDhValueDoubler: (value: number) => void;
    dhValueDoubler: number;
}

interface HalverProps {
    // The type is "a function that consumes a boolean and returns nothing"
    setDhValueHalver: (value: number) => void;
    dhValueHalver: number;
}

function Doubler({
    setDhValueDoubler,
    dhValueDoubler
}: DoublerProps): JSX.Element {
    return (
        <Button onClick={() => setDhValueDoubler(2 * dhValueDoubler)}>
            Double
        </Button>
    );
}

function Halver({ setDhValueHalver, dhValueHalver }: HalverProps): JSX.Element {
    return (
        <Button onClick={() => setDhValueHalver(0.5 * dhValueHalver)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                setDhValueDoubler={setDhValue}
                dhValueDoubler={dhValue}
            ></Doubler>
            <Halver
                setDhValueHalver={setDhValue}
                dhValueHalver={dhValue}
            ></Halver>
        </div>
    );
}
