import React from 'react';
import style from "./Test.module.css";
import notFound from "../img/Elements/img_not_found.jpg";

const ActiveTest = (props) => {
    return (
        <div className="col-10 d-flex">
            {props.variables.map((e, index) => (
                <span key={`img${index}`}
                      className={`${style.default} ${e.accuracy && e.onclicked
                          ? style.card_is_true
                          : !e.accuracy && e.onclicked
                              ? style.card_is_false
                              : ""}`}
                      onClick={(target) => {
                          props.setOnClickedThunk(e.accuracy, e.id);
                      }}>
                            <img style={{maxWidth: "200px"}} src={e.img ? e.img : notFound} alt=""/>
                        </span>
            ))}
        </div>
    );
};

export default ActiveTest;