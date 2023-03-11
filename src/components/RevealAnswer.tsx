import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
<<<<<<< HEAD
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    // Only includes <div>42</div> if `visible` is true
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> upstream/task-components
}
