import './modal.css'
import {useSelector} from "react-redux/es/exports";

export const Modal = ({children, finished}) => { // finished is for closing a modal window while it done
  return (
    <>
      {finished ? <div className='modalFinished' /> :
      <div className='modalWrap' >
        <div className='modalContent'>
          {children}
        </div>
      </div>
    }
    </>
  )
}