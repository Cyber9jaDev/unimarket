import React from 'react';
import './styles/pagination.scss';
import { useAppContext } from '../contexts/AppContext';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Pagination = ( { setValues, totalPages, page } ) => {
  const { isLoading }= useAppContext();

  // convert totalPages into an array 
  // const convertTotalPagesToArray = (pages) => {
  //   const Arr = [];
  //   for (let index = 1; index <= pages; index++) {
  //     Arr.push(index);      
  //   }
  //   return Arr;
  // }

  const handleNextPage = () => {
    if (page >= totalPages) return;
    setValues(current => ({ ...current, page: page + 1 } ))
  };

  const handlePrevPage = () => {
    if (page <= 1) return;
    setValues(current => ({ ...current, page: page -1 } ));
  };

  // const changePage = (pageCount) => {
  //   setValues(current => ({ ...current, page: pageCount }))
  // }

  return (
    <>
      { !isLoading && totalPages > 1 && <section id='pagination'>
        <nav aria-label="navigation">
          <ul className="pagination"> 
            <li><FontAwesomeIcon className='pagination-icon chevron' icon={faChevronLeft} onClick={handlePrevPage}/></li>
            <li><strong>{page} / {totalPages}</strong></li>
            <li><FontAwesomeIcon className='pagination-icon chevron' icon={faChevronRight} onClick={handleNextPage}/></li>
          </ul>
        </nav>
      </section>}
    </>
  );

  // return (
  //   <>
  //     { !isLoading && totalPages > 1 && <section id='pagination'>
  //       <nav aria-label="navigation">
  //         <ul className="pagination"> 
  //           { page !== 1 && <li onClick={handlePrevPage} className="page-item"><button className="page-link">Prev</button></li> }
  //           { convertTotalPagesToArray(totalPages).map((pageCount, index) => {
  //             return ( index > 1 ? null : 
  //               <li key={pageCount} className="page-item">
  //                 <span onClick={() => { changePage(pageCount) }} className={ pageCount === page ? "page-link active" : "page-link"}>{pageCount}</span>
  //               </li> 
  //             )
  //           })}
  //           { page < totalPages && <li className="page-item"><button onClick={handleNextPage} className="page-link">Next</button></li> }
  //         </ul>
  //       </nav>
  //     </section>}
  //   </>
  // );
}

export default Pagination;

