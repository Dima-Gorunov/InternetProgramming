import React from 'react';
import style from "../Test.module.css"

const QuesText = (props) => {
    return (
        <div className={style.question_text}>
            {props.nextPage && props.result[props.result.length - 1]
                ? "верно"
                : props.nextPage && !props.result[props.result.length - 1]
                    ? "Неверно"
                    : props.quesText}
        </div>
    );
};

export default QuesText;