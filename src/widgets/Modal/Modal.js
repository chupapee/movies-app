import './modal.css'

export const Modal = ({children}) => {


  return (
    <div className='modalWrap' >
      <div className='modalContent'>
        {children}
      </div>
    </div>
  )
}