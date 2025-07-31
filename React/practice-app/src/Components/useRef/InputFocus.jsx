import React, { useRef } from 'react';

const InputFocus = () => {
    const inputRef=useRef()

    const handleInput=()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleInput}>Click</button>
        </div>
    );
}

export default InputFocus;
