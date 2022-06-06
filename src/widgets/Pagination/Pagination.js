import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices.js/moviesSlice';
import './pagination.css'

export default function Pagination() {

  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.movies.currentPage)

  // change current page num
  const changePage = (e, page) => {
    dispatch(setCurrentPage(page))
  }

  const pages = useSelector(state => state.movies.pages)

  return (
    <div className='paginationWrapper'>
      <div className='pagination'>
        {pages.map(page => (          
          <span key={page} className={currentPage === page ? 'active' : ''} onClick={(e) => changePage(e, page)}>{page}</span>
        ))}
      </div>
    </div>
  )
}
