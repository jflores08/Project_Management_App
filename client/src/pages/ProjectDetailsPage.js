import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProjectDetailsPage(props) {
   

    const API_URL = 'http://localhost:5005';

    const [project, setProject] = useState(null);

    const projectId = useParams().id;

    console.log('props are', projectId)

    const getProject = () => {
        axios.get(`${API_URL}/api/projects/${projectId}`)
        .then(response => {
            console.log('project data', response.data)
            setProject(response.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProject();   
    }, [])

    

    return (
        <div>
            {project && (
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                     
                     {/* Edit the Project */}
                    <Link to={`/projects/edit/${project._id}`}>
                        <button>Edit this Project</button>
                    </Link>
                </>

            )}
           
        </div> 
    )
}

