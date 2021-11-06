class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options : [],
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions () {
        this.setState(()=> ({ options: [] }))
        // this.setState(()=>{
        //     return {
        //         options: []
        //     }
        // })
    }
    handleDeleteOption (optionToRemove) {
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert (option)
    }
    handleAddOption (option) {
        if(!option) {
            return ('Enter Valid Value to add')
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist.'
        }
        this.setState((prevState)=> ({ options : prevState.options.concat([option]), }))
        // this.setState((prevState)=> {
        //     return {
        //         options : prevState.options.concat([option]),
        //     }
        // })
    }
    render() {
        const header = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={header} />
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should I do?
            </button>
        </div>
    );

}

const Options = (props) => {

    return(
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            {props.options.length === 0 && <p>Pleas add an options to get started!!</p>}
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
            )}
        </div>
    )

}

const Option = (props) => {
    return (
        <p>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </p>
    )
}

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
