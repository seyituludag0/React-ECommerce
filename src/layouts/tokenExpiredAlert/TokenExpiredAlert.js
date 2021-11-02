import React from 'react'
import Simplert from './simplert.js'
import "./alert.css"


export default class TokenExpiredAlert extends React.Component {
  
  constructor () {
    super()
    this.state = {
      showAlert: false,
      typeAlert: 'info',
      titleAlert: 'Oturumunuz Sonlandırıldı',
      messageAlert: 'Lütfen tekrar giriş yapınız'
    }
  }
  

  render () {
    let { showAlert, typeAlert, titleAlert, messageAlert } = this.state
    let { openAlert } = this

    return (
      <>
        <Simplert
          showSimplert={showAlert}
          type={typeAlert}
          title={titleAlert}
          message={messageAlert}
        />

        {/* <div className='grid__row content centered'>
          <div className='grid__row content__row'>
          <div className='grid__col-3 example__title'>Information Alert</div>
            <div className='grid__col-3'>
              <button style={{color:"#000"}}
                className='button button--radius button--blue'
                onClick={openAlert.bind(
                  this,
                  'Title',
                  'Message with <b>HTML</b>',
                  'info'
                )}
              >
                Click Me!
              </button>
            </div>
          </div>
        </div> */}
        </>
    )
  }

  // Events
  openAlert (title, message, type) {
    this.setState({
      showAlert: true,
      titleAlert: title,
      messageAlert: message,
      typeAlert: type
    })
  }
}
