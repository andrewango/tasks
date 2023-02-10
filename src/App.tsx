import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Andrew Ngo
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <h1>Let&#39;s Study Probability with Kakao Bear!</h1>
            <img
                src="https://toppng.com/public/uploads/thumbnail/ryan-bear-kakaofriends-kakao-cute-kawaii-bts-kakao-friends-ryan-mouse-pad-11563038352z8h09mpbro.png"
                alt="A picture of Kakao Bear studying"
            />
            <ol className="Axioms">
                There are three axioms of probability. Let S be a sample space
                and A be an event where A is a subset of S. Then we assume that
                the number P&#x28;A&#x29; satisfies the following conditions:
                <li>P&#x28;A&#x29; is greater than or equal to 0.</li>
                <li>P&#x28;S&#x29; equals 1.</li>
                <li>
                    Let A1, A2, ..., An be a sequence of mutually exclusive, or
                    disjoint, sets. Then the probability of the union of all of
                    the sets equals the summation of the probabilities of the
                    sets.
                </li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <b>ROUND 1</b>
                    </Col>
                    <Col>
                        <b>FIGHT!</b>
                    </Col>
                </Row>
            </Container>

            <div id="rectangle_1"></div>
            <div id="rectangle_2"></div>
        </div>
    );
}

export default App;
