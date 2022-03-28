import React from 'react';
import style from "../TestContainer/Test.module.css"

const ResultPage = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5">
            <div>
                {
                    props.result.map((e, index) => <div>Вопрос номер {index + 1}: {e ? "Верно" : "Неверно"}</div>)
                }
            </div>
        </div>
    );
};

export default ResultPage;