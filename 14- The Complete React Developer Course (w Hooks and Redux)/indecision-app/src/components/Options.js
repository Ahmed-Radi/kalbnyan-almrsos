import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 class="widget-header__title ">Your options</h3>
            <button className="button button--link"
                onClick={props.handleDeleteOptions}
                >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Pleas add an options to get started!!</p>}
        {
            props.options.map((option) =>
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption = {props.handleDeleteOption}
                />
        )}
    </div>
);

export default Options;