import React, { use } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-toastify'

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logOut, setUser } = use(AuthContext)

  const links1 = (
    <nav className="lg:flex">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/mycourses'}>My Courses</NavLink>
      </li>
    </nav>
  )

  const links2 = (
    <nav>
      {user && (
        <>
          <li>
            <NavLink to={'/myenrolledcourses'}>My Enrolled Courses</NavLink>
          </li>
          <li>
            <NavLink to={'/addcourse'}>Add Course</NavLink>
          </li>
          <li>
            <NavLink to={'/myaddedcourses'}>My Added Courses</NavLink>
          </li>
        </>
      )}
    </nav>
  )

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()
      .then(() => {
        toast.warn('Logged Out Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
        setUser(null)
        navigate('/login')
      })
      .catch(() => {
        toast.warn('Unable to log out. Please try again!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
      })
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links1}
              <li>
                <a>Dashboard</a>
                <ul className="p-2">{links2}</ul>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img className="w-8" src="/logo5.png" alt="" />
            AKM SkillVerse
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links1}
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2 w-50">{links2}</ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogOut} className="btn bg-accent">
              Log Out
            </Link>
          ) : (
            <Link to={'/login'} className="btn bg-base-300">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
