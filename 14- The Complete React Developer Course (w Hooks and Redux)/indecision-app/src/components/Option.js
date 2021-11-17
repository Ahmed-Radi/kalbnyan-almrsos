import React from 'react';

const Option = (props) => (
    <p className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>

        <button className="button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
    </p>
)

export default Option;