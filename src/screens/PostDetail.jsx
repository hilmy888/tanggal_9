import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetail } from '../services/api'
import ButtonDelete from '../components/ButtonDelete'

function PostDetail() {
  const [post, setPost] = useState()
  const params = useParams()
  const { id } = params

  useEffect(() => {
    getPostDetail(id)
      .then(
        (data) => setPost(data),
      )
  }, [id])

  return (
    <div>
      {
        post
          ? (
            <div>
              {post.tittle}
              {post.id}
              {post.author}
            </div>
          )
          : ''
      }
      <ButtonDelete type="button" postId={id} />
    </div>
  )
}
export default PostDetail
