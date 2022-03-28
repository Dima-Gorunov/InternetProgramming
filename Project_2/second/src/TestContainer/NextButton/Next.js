import React from 'react';
import style from "../Test.module.css";
import next_page from "../../img/Polygon.png"

const Next = (props) => {
    return (
        <div
            className={`${props.nextPage && props.activepage !== props.questions.length ? style.nextPage_active : style.nextPage_disActive}`}
            onClick={() => {
                props.onPageChanged(props.activepage + 1)
                props.getQuestionThunk(props.activepage)
            }}>
            <div className={style.next_button}>
                <img src={next_page} alt=""/>
            </div>
        </div>
    );
};

export default Next;