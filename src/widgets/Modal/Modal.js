import './modal.css'

export const Modal = ({children, finished}) => { // finished is for closing a modal window
  return (
    <>
      {finished ? <div className='modalWrap modalFinished' /> :
      <div className='modalWrap' >
        <div className='modalContent'>
          {children}
        </div>
      </div>
    }
    </>
  )
}