import { useState } from "react";

const UseToggleCustom = () => {
    const [isVisible,setVisible]=useState(false)

    const handleDisplay=()=>{
        setVisible(prev=>!prev)
    }

    return {isVisible,handleDisplay}
}

export default UseToggleCustom;
