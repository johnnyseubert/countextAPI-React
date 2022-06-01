import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext';

export default function HandleCounter() {
    const { counter, increaseCounter } = useContext(CounterContext);

    return (
        <div>
            <span>
                <strong>Counter</strong>
            </span> {counter}
            <button onClick={increaseCounter}>Aumentar Counter</button>
        </div>
    )
}
