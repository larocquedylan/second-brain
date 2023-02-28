import { useState } from "react";

export default function State() {
    useState = useState(false);
    const [toggle, setToggle] = useState(false);


    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    );
}
