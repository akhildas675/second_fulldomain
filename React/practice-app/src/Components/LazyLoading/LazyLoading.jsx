import React, { Suspense, useState } from 'react';
const Loading=React.lazy(()=>import('./LazyComponent'));

const LazyLoading = () => {
    const [loading,setLoading]=useState(false)

    const handleLazy=()=>{
        setLoading(true)
    }
    return (
        <div>

            <h1>Parent component</h1>

            <button onClick={handleLazy}>Click</button>

            {loading && (
                <Suspense fallback={<p>...isLoading</p>}>
                    <Loading/>
                </Suspense>
            )}
            
        </div>
    );
}

export default LazyLoading;
