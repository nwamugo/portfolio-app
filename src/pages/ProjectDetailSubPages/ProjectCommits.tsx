import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import List from "../../components/List";
import { ICommit } from "../../model/commit";

function ProjectCommits({ userName }: {userName: string}) {
  const [ loading, setLoading ] = useState(true);
  const [ commits, setCommits ] = useState<ICommit[]>([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/repos/${userName}/${name}/commits`
      )
      const result = await response.json();
      if (result) {
        setCommits(result)
        setLoading(false)
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name])

  return (
    <div className="Project-container">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List items={commits.map((commit) => ({
            field: commit.sha,
            value: commit.commit.message,
          }))} />
        </div>
      )}
    </div>
  )
}

export default ProjectCommits