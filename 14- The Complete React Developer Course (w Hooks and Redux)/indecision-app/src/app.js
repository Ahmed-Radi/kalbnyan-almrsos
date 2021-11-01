class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const header = 'Put your life in the hands of a computer';
        const options = ['Ahmed Radi','Ali Radi']

        return (
            <div>
                <Header title={title} subTitle={header} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handelPick () {
        alert('handel Pick')
    }
    render() {
        return (
        <div>
            <button onClick={this.handelPick}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options)
        alert('handleRemoveAll')
    }
    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optionText={option}/> )}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>
                {this.props.optionText}
            </p>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
