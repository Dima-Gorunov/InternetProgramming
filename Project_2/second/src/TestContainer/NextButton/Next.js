import React from 'react';
import style from "../Test.module.css";

const Next = (props) => {
    return (
        <div>
            {
                props.activepage !== props.questions.length - 1
                    ? <div
                        className={`${props.nextPage && props.activepage !== props.questions.length - 1 ? style.nextPage_active : style.nextPage_disActive}`}
                        onClick={() => {
                            props.onPageChanged(props.activepage + 1)
                        }}>
                        далее
                    </div>
                    : <div>Ваш результат: число</div>
            }
        </div>
    );
};

export default Next;