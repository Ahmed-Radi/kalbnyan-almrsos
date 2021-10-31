const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        addOptions()
    }
    console.log(option)
}

const onRemoveAll = () => {
    app.options = [];
    addOptions()
}

const user = {
    name: 'Ahmed Radi',
    age: 26,
    location: 'Egypt'
};
const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoot = document.getElementById('app');

const addOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? `Here are your options` : 'No options'}
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" id="" />
                <button>Submit</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

addOptions()