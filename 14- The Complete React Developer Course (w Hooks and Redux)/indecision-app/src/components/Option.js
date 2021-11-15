import React from 'react';

const Option = (props) => (
    <p>
        {props.optionText}
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