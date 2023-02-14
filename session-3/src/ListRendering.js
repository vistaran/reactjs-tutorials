import { Fragment } from "react";

function ListRendering() {

    const names = ['Bruce', 'Clark', 'Diana'];
    const nameList = names.map(name => <h2>{name}</h2>);

    const persons = [
        {
            id: 1,
            name: 'person1',
            age: 30
        },
        {
            id: 2,
            name: 'person2',
            age: 25
        },
        {
            id: 3,
            name: 'person3',
            age: 26
        },
        {
            id: 4,
            name: 'person4',
            age: 27
        },
    ];

    const personList = persons.map(person=><h2>My name is {person.name}.</h2>)

    return (
        <Fragment>
            <div>{nameList}</div>
            <div>{personList}</div>
        </Fragment>
    );
}

export default ListRendering;