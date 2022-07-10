import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import { Pagination } from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux/es/exports';
import { Modal } from '../../widgets/Modal/Modal'
import { Auth } from "../Auth/Auth";
import { useEffect } from 'react';

export function HomePage() {

  const pageChanged = useSelector(state => state.movies.currentPage)
  const error = useSelector(state => state.movies.error)
  const checked = useSelector(state => state.auth.checked)
  
  // params for closing modal window
  const params = {}
  if(checked || localStorage.getItem('email')) params.finished = true

  // scrolling to top on change pagination num
  function scrollToTop(){
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  useEffect(scrollToTop, [pageChanged])

  return (
    <>
      <Modal {...params}>
        <Auth />
      </Modal>
      <div className='contentWrapper'>
        <SearchForm />
          {error.length > 0 ? <div className='error'>{error}</div>
          : <div className='content'>
              <Movies />
            </div>
          }
        <Pagination />
        </div>
    </>
  )
}
