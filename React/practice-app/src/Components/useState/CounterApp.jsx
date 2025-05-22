
const CounterApp = () => {
   
    let rendering=['apple','orange','grape','kiwi']
    return (
        <div>
           {rendering.map((fruit)=>{return <h1>{fruit}</h1>})}
        </div>
    );
}

export default CounterApp;
