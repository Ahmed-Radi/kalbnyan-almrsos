import React from 'react';

export default class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined,
        }
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        // The variable is named error because it may return an error
        const error = this.props.handleAddOption(option)
        if (!error) {
            e.target.elements.option.value = ''
        }
        this.setState(() => ({ error: error }))
        // this.setState(() => {
        //     return {
        //         error: error,
        //     }
        // })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}