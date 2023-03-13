import './index.css'

const Login = props => {
  const {onClickButton} = props
  return (
    <button onClick={onClickButton} className="button" type="button">
      Login
    </button>
  )
}

export default Login
