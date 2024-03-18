import { useState } from "react";

export const SimpleButton: () => JSX.Element = () => {
    const [state, setState] = useState(false);
    const handleCheck = () => {
        setState((prevState) => !prevState);
    };
    return <button onClick={handleCheck}>{state ? "ON" : "OFF"}</button>
}