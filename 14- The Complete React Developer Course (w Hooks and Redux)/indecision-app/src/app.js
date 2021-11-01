class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
            <button>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <ol>
                    <li>Element 1</li>
                    <li>Element 2</li>
                </ol>
            </div>
        )
    }
}

class AddOptions extends React.Component {
    render(e) {
        return (
            <div>
                <form>
                    <input type="text" name=""/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
)
ReactDOM.render(jsx, document.getElementById('app'));
