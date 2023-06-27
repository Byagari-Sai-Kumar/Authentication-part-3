import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const {history} = props

  const jwtTokens = Cookies.get('jwt_token')
  if (jwtTokens !== undefined) {
    return <Redirect to="/" />
  }

  const onSuccessLogin = () => {
    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 20})
      onSuccessLogin()
    }
  }

  return (
    <div className="bgContainer">
      <h1>Please Login</h1>
      <button
        type="button"
        className="loginButton"
        onClick={onClickLoginButton}
      >
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
