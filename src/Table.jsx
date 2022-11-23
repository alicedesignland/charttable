import { Routes, Route, Link } from 'react-router-dom';
import './tabledata.css';
import axios from 'axios';
import Chart from './Chart';
import { useState, useEffect } from 'react';


export function Table() {
    const [data, getData] = useState([])
    const [todos, setToDos] = useState([]);


    useEffect(() => {
        fetchData()
        fetchTodo()
    }, [])


    const fetchData = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    const fetchTodo = async () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                setToDos(response);
            })

    }



    return (
        <>
            <h1>Task 2 with Route</h1>
            <tbody id="customers">
                <tr>
                    <th>NR</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-mail</th>

                </tr>
                {data.map((item, id) => (
                    <tr key={id}>
                        <td><Link to={`chart/${item.id}`}>{item.id}</Link></td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
            
                    </tr>

                ))}
               

            </tbody>

        </>
    );
}
export default Table; 