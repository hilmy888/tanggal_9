import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getPostList } from '../services/api'

function PostList() {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  useEffect((data) => {
    getPostList(data)
      .then(
        (postData) => setPosts(postData),
      )
  }, [])

  return (
    <div>
      {
        posts.length > 0
        && posts.map((val) => (
          <div key={val.id}>
            {val.tittle}
            /
            {val.author}
            /
            <Link to={`${location.pathname}/${val.id}`}>Detail</Link>
          </div>
        ))
      }
    </div>
  )
}
export default PostList
