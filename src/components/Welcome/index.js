import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {val: 'Subscribe'}

  changeBtn = () => {
    const {val} = this.state
    if (val === 'Subscribe') {
      this.setState(prevState => ({val: 'Subscribed'}))
    } else {
      this.setState(prevState => ({val: 'Subscribe'}))
    }
  }

  render() {
    const {val} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.changeBtn}>
          {val}
        </button>
      </div>
    )
  }
}
export default Welcome
