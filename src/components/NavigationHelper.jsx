import React from 'react'
import { Link } from 'react-router-dom'

function NavigationHelper() {
  const root = [
    ['/', 'Home'],
    ['/login', 'Login'],
    ['/register', 'Register'],
    ['/create-post/new', 'CreatePost'],
    ['/post-list', 'PostList'],
  ]
  return (
    <nav>
      {
        root.map(([path, title]) => (<Link key={path} to={path}>{title}</Link>))
      }
    </nav>
  )
}
export default NavigationHelper
