import { useEffect, useState } from "react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";

import List from "../components/List";
import { IProject } from "../model/project";

function Projects({ userName }: {userName: string}) {
  const [ loading, setLoading ] = useState(true);
  const [ projects, setProjects ] = useState<IProject[]>([]);
  const [ searchParams ] = useSearchParams();

  function getFilteredProjects() {
    const search = searchParams.get('search');
    if (search === null || search === "") {
      return projects;
    } else {
      return projects.filter(
        (project) =>
          project.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    }
  }

  useEffect(() => {
    async function fetchData() {
      const projects = await fetch(
        `https://api.github.com/users/${userName}/repos`
      )
      const result = await projects.json();
      if (result) {
        setProjects(result)
        setLoading(false)
      }
    }
    fetchData()
  }, [userName])

  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={getFilteredProjects().map((project) => ({
              field: project.name,
              value: <RouterLink to={project.name}>
                        {project.name}
                    </RouterLink>,
            }))}
          />
        </div>
      )}
    </div>
  )
}

export default Projects