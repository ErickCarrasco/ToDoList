import { db, storageFB } from '../firebase-config';
import React, { useState, useEffect } from 'react';

import './todoList.css'

const TodoList = params => {

    const [name, setName] = useState()
    const [state, setState] = useState(false)
    const [comment, setComment] = useState()

    const [taskList, setTaskList] = useState([])
    

    const getList = async () => {
        let obj;
        let list = [];
        const querySnapshot = await db.collection("todolists").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            //console.log(obj)
            list.push(obj);
            //console.log(list)
        })
        setTaskList(list)
    };

    useEffect(() => {
        getList();
    }, [])

    return (
        <div className='container' >
            <h1>MY To-Do List</h1>
            <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
            <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            </div>

            {taskList.map((tile, index)=>(
                <li className='todo stack-small'>
                    <div className='c-cb'>
                        <input id={tile.name} type="checkbox" />
                        <label className='todo-label' htmlFor={tile.name}>
                            {tile.name}
                        </label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            Edit <span className="Visually-hidden">{tile.name}</span>
                        </button>
                        <button type="button" className="btn">
                            Delete <span className="Visually-hidden">{tile.name}</span>
                        </button>
                    </div>

                </li>
            ))}

            


        </div>
    )
}

export default TodoList;