import React from 'react';
import ProgressContainer from "./ProgressContainer";
import notFound from "../img/Elements/img_not_found.jpg"
import style from "./Test.module.css"
import NextContainer from "./NextButton/NextContainer";

const Test = (props) => {

    return props.activequestion
        ? (
            <div>
                <ProgressContainer/>
                <div className={style.question_text}>
                    <div>
                        {props.activequestion.text}
                    </div>
                    <div>
                        <NextContainer/>
                    </div>
                </div>
                <div className="col-10 d-flex">
                    {props.activequestion.variables.map((e, index) => (
                        <span key={`img${index}`}
                              className={`${style.default} ${e.accuracy && e.onclicked
                                  ? style.card_is_true
                                  : !e.accuracy && e.onclicked
                                      ? style.card_is_false
                                      : ""}`}
                              onClick={(target) => {
                                  props.setOnClickedThunk(e.accuracy, e.id);
                              }}>
                            <img style={{maxWidth:"200px"}} src={e.img ? e.img : notFound} alt=""/>
                        </span>
                    ))}
                </div>
            </div>)
        : <div>Загрузка</div>
};

export default Test;
