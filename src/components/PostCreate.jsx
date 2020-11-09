import React from 'react'
import { useForm } from 'react-hook-form'
import { createPost } from '../services/api'

function PostCreate() {
  const { register, handleSubmit } = useForm()

  function sendPost(data) {
    createPost(data)
  }
  return (
    <form onSubmit={handleSubmit(sendPost)}>
      <div>
        <label htmlFor="email">Tittle</label>
        <input className="email" type="text" name="tittle" ref={register} />
      </div>
      <div>
        <label htmlFor="password">Author</label>
        <input type="text" name="author" ref={register} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  )
}
export default PostCreate
