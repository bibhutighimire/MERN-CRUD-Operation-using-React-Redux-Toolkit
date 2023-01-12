import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes/readNotes">Read Notes</Link>
          </li>
          <li>
            <Link to="/notes/createNote">Create Notes</Link>
          </li>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Layout