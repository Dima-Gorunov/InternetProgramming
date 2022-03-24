import React from 'react';
import TestContainer from "../TestContainer/TestContainer";

const Homepage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-black p-5">
            <div className="bg-danger p-5">
                <TestContainer/>
            </div>
        </div>
    );
};

export default Homepage;