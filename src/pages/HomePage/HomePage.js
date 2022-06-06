import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import { Header } from '../../widgets/Header/Header';
import Pagination from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux';

export default function HomePage() {

  const currentPage = useSelector(state => state.movies.currentPage)

  return (
    <>
      <div className='wrapper'>
        <Header />
        <SearchForm />
        <div className='contentWrapper'>
          <div className='content'>
            <Movies />
          </div>
            <Pagination currentPage={currentPage}/>
        </div>
      </div>
    </>
  )
}
