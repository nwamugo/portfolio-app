import { NavLink, Outlet } from "react-router-dom";

function ProjectDetail() {
  return (
    <div className="Project-container">
      <h2>Project Detail</h2>
      <nav>
        <NavLink to="">Repo</NavLink>
        <NavLink to="technologies">Technologies</NavLink>
        <NavLink to="commits">Commits</NavLink>
        <NavLink to="branches">Branches</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default ProjectDetail