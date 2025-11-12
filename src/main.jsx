import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomeLayout from './Layout/HomeLayout'
import MyCourses from './Components/MyCourses'
import MyEnrolledCourses from './Components/MyEnrolledCourses'
import AddCourse from './Components/AddCourse'
import MyAddedCourses from './Components/MyAddedCourses'
import Login from './Pages/Login'
import AuthProvider from './Provider/AuthProvider'
import ForgotPass from './Pages/ForgotPass'
import Register from './Pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/mycourses',
        element: <MyCourses></MyCourses>,
      },
      {
        path: '/myenrolledcourses',
        element: <MyEnrolledCourses></MyEnrolledCourses>,
      },
      {
        path: '/addcourse',
        element: <AddCourse></AddCourse>,
      },
      {
        path: '/myaddedcourses',
        element: <MyAddedCourses></MyAddedCourses>,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/forgotpassword',
        Component: ForgotPass,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
