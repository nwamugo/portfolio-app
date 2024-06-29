import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


import { IProject } from "../../model/project";

function ProjectRepo({ userName }: {userName: string}) {
  const [ loading, setLoading ] = useState(true);
  const [ project, setProject ] = useState<Partial<IProject>>({});
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/repos/${userName}/${name}`
      )
      const result = await response.json();
      if (result) {
        setProject(result)
        setLoading(false)
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name])

  return (
    <div className="Project-container">
      <h2>{project.name}</h2>
      <p>Created on: {project.created_at}</p>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>
      )}
    </div>
  )
}

export default ProjectRepo