import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import { Pagination } from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux/es/exports';

export function HomePage() {

  const error = useSelector(state => state.movies.error)

  return (
    <>
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
