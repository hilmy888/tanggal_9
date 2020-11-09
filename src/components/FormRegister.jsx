import React from 'react'
import { useForm } from 'react-hook-form'
import { userRegister } from '../services/api.js'

function FormRegister() {
  const { register, handleSubmit } = useForm()

  function inputRegister(data) {
    return userRegister(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(inputRegister)}>
        <div>
          <label htmlFor="email">Email :</label>
          <input className="email" type="text" name="email" ref={register} />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type="text" name="password" ref={register} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default FormRegister
