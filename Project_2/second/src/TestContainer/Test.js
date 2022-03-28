import React from 'react';
import ProgressContainer from "./ProgressContainer";
import notFound from "../img/Elements/img_not_found.jpg"
import style from "./Test.module.css"
import NextContainer from "./NextButton/NextContainer";
import ActiveTestContainer from "./ActiveTestContainer";
import QuesTextContainer from "./QuesText/QuesTextContainer";

const Test = (props) => {

    return props.activequestion
        ? (
            <div className={style.test_container}>
                <ProgressContainer/>
                <div className={style.question_container}>
                    <div>
                        <QuesTextContainer/>
                    </div>
                    <div>
                        <NextContainer/>
                    </div>
                </div>
                <ActiveTestContainer/>
            </div>)
        : <div>Загрузка</div>
};

export default Test;
