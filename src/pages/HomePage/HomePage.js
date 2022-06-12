import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'
import Pagination from '../../widgets/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { Preloader } from '../../widgets/Preloader/Preloader';

export default function HomePage() {
  return (
    <>
      <div className='contentWrapper'>
        <SearchForm />
        <div className='content'>
          <Movies />
        </div>
        <Pagination />
      </div>
    </>
  )
}
