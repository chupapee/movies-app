import './modal.css'

export const Modal = ({children, visitble, setVisible}) => {

  const rootClasses = ['modalWrap']

  if (visitble) {
    rootClasses.push('active')
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className='modalContent'>
        {children}
      </div>
    </div>
  )
}