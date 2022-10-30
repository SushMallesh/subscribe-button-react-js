import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onChangeButton = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.onChangeButton()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="content">Thank you! Happy Learning</p>
        <button
          onClick={this.onClickSubscribe}
          className="button"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

/* onClickSubscribe = () => {
//     this.setState({isSubscribed: false})
//   }

//   onClickSubscribed = () => {
//     this.setState({isSubscribed: true})
//   }

//   render() {
//     const {isSubscribed} = this.state
//     return (
//       <div className="container">
//         <h1 className="heading">Welcome</h1>
//         <p className="content">Thank you! Happy Learning</p>
//         {isSubscribed && (
//           <button
//             onClick={this.onClickSubscribe}
//             className="button"
//             type="button"
//           >
//             Subscribe
//           </button>
//         )}
//         {!isSubscribed && (
//           <button
//             onClick={this.onClickSubscribed}
//             className="button"
//             type="button"
//           >
//             Subscribed
//           </button>
//         )}
//       </div>
//     )
//   }
} */

export default Welcome
