import React from 'react';
import { useReducer } from 'react';

const themeChanger =(state,action)=>{
    switch(action.type){
        case 'Toggle': 
        return {isDark:!state.isDark}
        default : state
    }
    
}

const UseReducerDark = () => {

    const [state,dispatch]=useReducer(themeChanger,{isDark:false});

    const dark = {
        background:'#000',
        height:'100vh'
    };

    const light={
        background:'#fff',
        height:'100vh'
    }
    return (
        <div style={state.isDark ? dark : light}>

            <button onClick={()=>dispatch({type:'Toggle'})}>Click</button>
            
        </div>
    );
}

export default UseReducerDark;
