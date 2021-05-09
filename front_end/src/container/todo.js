import { useState, useEffect} from 'react';
import Todos from '../components/Todo';
import '../../src/Todos.css'


const Todo = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setTodo([...data])
        })
        .catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <h1>Todos</h1>
            <div className='todo-container'>
                {todo.map((todo) => (
                    <Todos todo={todo} key={todo.id}/>
                ))}
            </div>
        </div>
    );
};

export default Todo;