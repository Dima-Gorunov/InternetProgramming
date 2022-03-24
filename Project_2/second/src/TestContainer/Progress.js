import React from 'react';
import style from './Test.module.css'

const Progress = (props) => {
    return (
        <div className={style.progress_container}>
            {props.questions.map((e, index) => (
                <span key={`page${index}`}
                      className={`${style.progress_items_default} ${index < props.activepage ? style.progress_active : ""}`}
                      onClick={() => {
                      }}/>
            ))}
        </div>
    );
};

export default Progress;