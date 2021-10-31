const user = {
    name: 'Ahmed Radi',
    age: 26,
    location: 'Egypt'
};
const template = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
ReactDOM.render(template, appRoot);
