import { Fragment, useState } from "react";

function StateExampleWithCounter() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <Fragment>
            <div onClick={()=>setCount(count + 1)}>{count}</div>
            <div onClick={()=>setCount2(count2 + 5)}>{count2}</div>
        </Fragment>
    );
}

export default StateExampleWithCounter;