import './modal.css'

export const Modal = ({children, finished}) => { // finished is for closing a modal window while it done
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