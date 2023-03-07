import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

    const linkStyles = ({isActive}) => {
        if(isActive){
            return{fontWeight: 'bold', color: 'green'}
        }
    }

  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink to='/' style={linkStyles}> Home </NavLink>
        <NavLink to='/about' style={linkStyles}> About </NavLink>
    </nav>

    )
}

export default Navbar