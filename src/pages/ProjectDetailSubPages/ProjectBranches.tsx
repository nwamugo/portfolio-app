import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import List from "../../components/List";
import { IBranch } from "../../model/branch";

function ProjectBranches({ userName }: {userName: string}) {
  const [ loading, setLoading ] = useState(true);
  const [ branches, setBranches ] = useState<IBranch[]>([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/repos/${userName}/${name}/branches`
      )
      const result = await response.json();
      if (result) {
        setBranches(result)
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
          <List items={branches.map((branch) => ({
            field: branch.name,
            value: branch.protection_url
          }))} />
        </div>
      )}
    </div>
  )
}

export default ProjectBranches