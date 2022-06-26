import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    // const [count, setCount] = useState<number>(0);
    // Generics를 사용해 해당 상태가 어떤 타입을 가지고 있을지 설정한다.
    // Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에, 생략이 가능하다.

    // 상태가 null일 수도 있고 아닐수도 있을 때 Generics를 활용하면 좋다.

    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;