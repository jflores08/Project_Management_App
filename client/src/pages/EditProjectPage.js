import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {useNavigate} from 'react-router-dom'


export default function ProjectEditPage(props) {

    const API_URL = 'http://localhost:5005';

    const projectId = useParams().id;
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`${API_URL}/api/projects/${projectId}`)
        .then(response => {
            setTitle(response.data.title);
            setDescription(response.data.description);
        })
        .catch(err => console.log(err))
    }, [])




    const handleSubmit = e => {
        e.preventDefault();

        const requestBody = {title, description};
        axios.put(`${API_URL}/api/projects/${projectId}`, requestBody)
            .then(response => {

                //redirect using react routerdom
                navigate(`/projects/${projectId}`);
            })
        .catch(err => console.log(err));

    }

    const deleteProject = () => {
        axios.delete(`${API_URL}/api/projects/${projectId}`)
        .then(() => {
            //redirct to list of all the projects
            navigate(`/projects`);
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <h3>Edit this Project</h3>
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
                <button type='submit'>Update this Project ⬆</button>
            </form>
                <button onClick={deleteProject}> Delete this Project 🗑</button>
        </div>
    )
}

