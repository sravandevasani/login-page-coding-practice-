import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () =>
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickButton={this.onClickButton} />
          ) : (
            <Login onClickButton={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
