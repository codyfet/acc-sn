import * as React from 'react';
import Loader from 'react-loader-spinner'


export const Spinner = () => {
    return (
        <div className="loading-overlay">
            <div className="spinner">
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                />
            </div>
        </div>
    )
}