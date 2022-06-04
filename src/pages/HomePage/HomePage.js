import { Movies } from '../Movies/Movies'
import { SearchForm } from '../../widgets/SearchForm/SearchForm';
import './homePage.css'

export default function HomePage() {
  return (
    <>
      <div className='wrapper'>
      <div className='header'><a>IMDB</a>
        <SearchForm />
        </div>
        <div className='contentWrapper'>
          <div className='content'>
            <Movies />
          </div>
        </div>
      </div>
    </>
  )
}
