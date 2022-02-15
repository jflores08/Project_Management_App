import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
//import fetchData from

export default function AddProject(props) {

    console.log('Project params are', useParams())
    console.log('Project props are', props)

    const API_URL = 'http://localhost:5005';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const requestBody = {title, description};
        axios.post(`${API_URL}/api/projects`, requestBody)
        .then(response => {

            setTitle('');
            setDescription('');
            //fetchData();
            //window.location.reload()
            props.refreshProjects();
        })
        .catch(err => console.log(err));

    }

    return (
        <div>
            <h3> Add Project Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type='submit'>Add Project ➕</button>
            </form>
            
        </div>
    )
}

