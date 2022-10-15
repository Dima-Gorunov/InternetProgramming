import React from 'react';

const Homepage = ({Loading, Text, setText}) => {

    const changeInput=(e)=>{


        setText(e.currentTarget.value);
    }
    return (
        <div>


            <input type="text" value={Text} onChange={changeInput}/>
            {Loading?<div>true</div>:<div>false</div>}

        </div>
    );
};

export default Homepage;