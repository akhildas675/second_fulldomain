import React, { Suspense, useState } from 'react';

const Loading = React.lazy(()=>import('./LazyComponent'))

const LazyLoading = () => {

    const [lazy,setLazy]=useState(false);

    const handleChange=()=>{
        setLazy(true)
    }
    return (
        <div>

            <button onClick={handleChange}>Click</button>

            {lazy &&  (
                <Suspense  fallback={<p>...Loading</p>}>
                    <Loading/>
                </Suspense>
            )}
            
        </div>
    );
}

export default LazyLoading;
