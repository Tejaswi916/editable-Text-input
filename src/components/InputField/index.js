import {Component} from 'react'
import './index.css'

class InputField extends Component {
  state = {userInput: '', isButtonClicked: false}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  ChangeButton = () => {
    this.setState(prev => ({isButtonClicked: !prev.isButtonClicked}))
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    const editButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <div>
        <div className="container">
          <div className="inputContainer">
            <h1 className="heading">Editable Text Input</h1>
            <div className="inputContainer">
              {isButtonClicked ? (
                <p className="text">{userInput}</p>
              ) : (
                <input
                  type="text"
                  value={userInput}
                  onChange={this.onChangeInput}
                  className="input"
                />
              )}
            </div>
            <button onClick={this.ChangeButton} className="button">
              {editButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default InputField
