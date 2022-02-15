import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
//import { UNSAFE_NavigationContext } from 'react-router';
import ProjectCard from '../components/ProjectCard';
import AddProject from '../components/AddProject';


export default function ProjectListPage() {

    const API_URL = 'http://localhost5005';

    const [projects, setProjects] = useState ([]);

    const getAllProjects = () => {
        axios.get('/api/projects')
            .then(response => {
                console.log('response is: ',response)
                setProjects(response.data)
        })
            .catch(err => console.log(err));
    }

    useEffect (() =>{
        getAllProjects();
    }, [])

    console.log('projects are', projects);

    return (
        <div>
            <h1> All Projects 📝 ✍️</h1>

            {projects.map(project =>(<ProjectCard key={project._id} {...project} />))}

            <AddProject refreshProjects={getAllProjects}/>



        </div> 


    )
}
