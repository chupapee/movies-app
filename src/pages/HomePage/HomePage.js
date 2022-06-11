import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import Pagination from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { Preloader } from '../../widgets/Preloader/Preloader';

export default function HomePage() {

  const currentPage = useSelector(state => state.movies.currentPage)
  const isLoading = useSelector(state => state.movies.isLoading)
  return (
    <>
      <div className='contentWrapper'>
        {isLoading ? <Preloader /> :
        <>
          <SearchForm />
          <div className='content'>
            <Movies />
          </div>
          <Pagination currentPage={currentPage}/>
        </>
        }
      </div>
    </>
  )
}
