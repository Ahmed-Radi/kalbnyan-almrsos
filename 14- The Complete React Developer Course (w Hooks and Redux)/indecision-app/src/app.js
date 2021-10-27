const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options[0].length > 0 ? `Here are your options` : 'No options'}
        <ol>
            <li>{app.options[0].length > 0 ? `Here are your options ${app.options[0]}` : 'No options'}</li>
            <li>{app.options[1].length > 0 ? `Here are your options ${app.options[1]}` : 'No options'}</li>
        </ol>
    </div>
);

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

ReactDOM.render(template, appRoot);
