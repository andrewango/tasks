import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
//import { ColoredBox } from "./bad-components/ColoredBox";
//import { ShoveBox } from "./bad-components/ShoveBox";
//import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Andrew Ngo
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            {/*<ChooseTeam></ChooseTeam>*/}
            <hr></hr>
            {/*<ColoredBox></ColoredBox>*/}
            <hr></hr>
            {/*<ShoveBox></ShoveBox>*/}
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr></hr>
            <ChangeType></ChangeType>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr></hr>
        </div>
    );
}

export default App;
