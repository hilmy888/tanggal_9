import React from 'react'
import { useHistory } from 'react-router-dom'
import { postDelete } from '../services/api'

function ButtonDelete(props) {
  const history = useHistory()
  const { postId } = props
  function handleOnClik() {
    postDelete(postId)
      .then(
        () => { history.push('/') },
      )
  }
  return (
    <div>
      <button type="button" onClick={handleOnClik}>Delete</button>
    </div>
  )
}
export default ButtonDelete
