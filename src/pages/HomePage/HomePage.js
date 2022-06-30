import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import { Pagination } from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux/es/exports';
import { Modal } from '../../widgets/Modal/Modal'
import { Auth } from "../Auth/Auth";

export function HomePage() {

  const error = useSelector(state => state.movies.error)
  const checked = useSelector(state => state.auth.checked)
  const params = {}
  if(checked) params.finished = true

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
