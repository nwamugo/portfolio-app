import { Form, NavLink, useSearchParams } from 'react-router-dom'

import './Header.css'

function Header() {
  const [ searchParams ] = useSearchParams();

  return (
    <header className='App-header'>
      <h1>My Portfolio</h1>
      <Form
        className='relative text-right'
        action="/projects"
      >
        <input
          type='search'
          name='search'
          placeholder='Search'
          defaultValue={searchParams.get('search') ?? ''}
        />
      </Form>
      <nav>
        <NavLink
          to=""
          className={({ isActive }) => `
            App-link
            ${isActive ? "border-white" : "border-transparent"}`
          }
        >
          About me
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) => `
            App-link
            ${isActive ? "border-white" : "border-transparent"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) => `
            App-link
            ${isActive ? "border-white" : "border-transparent"}`
          }
        >
          Admin
        </NavLink>
      </nav>
      <p>NavLink is great for main app navigation when we want to
        highlight an active link, and Link is great for all the other
        links in our app</p>
    </header>
  )
}

export default Header