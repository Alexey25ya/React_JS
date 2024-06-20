import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);


    const upCount = () => {
        setCount(count + 1);
    }
    const downCount = () => {
        // if (count === 0)
        //     return;
        setCount(count - 1);
    }
    return (
        <div>
            <Button onClick={upCount} variant="contained">+1</Button>
            <div>{count}</div>
            <Button onClick={downCount}
                variant="contained">-1</Button>
        </div>
    )
}
export default Counter;