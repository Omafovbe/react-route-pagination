import { NavLink } from "react-router-dom"

const NavHeader = () => {
  const navRoutes = [
    {
      url: "/",
      name: "Home",
      end: "end"
    },
    {
      url: "/users",
      name: "Users",
    },
    {
      url: "/states",
      name: "Nig States"
    }
  ]
  return (
    <nav>
      <ul>
        {navRoutes.map((link) => (
          <li key={link.name}>
            
            <NavLink key={link.name} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} to={link.url} {...link}>{link.name}</NavLink>
            
             
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavHeader
