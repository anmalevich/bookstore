import { FC, useEffect, useState } from 'react';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';

import './MainPage.scss';
import { Spinner } from '../../components/Spinner/Spinner';
import axios from 'axios';




export const MainPage = () => {
  const [cards, setCards] = useState<Card[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchCards();
//   }, [currentPage]);

//   const fetchCards = async () => {
//     try {
//       const response = await axios.get(`/api/cards?page=${currentPage}&limit=9`);
//       setCards(response.data.cards);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching cards:', error);
//     }
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const renderCards = () => {
//     return cards.map((card) => (
//       <div className="card" key={card.id}>
//         <h3>{card.title}</h3>
//         {/* Остальное содержимое карточки */}
//       </div>
//     ));
//   };

//   const renderPagination = () => {
//     const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//     return (
//       <div className="pagination">
//         <button
//           className="prev"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {pageNumbers.map((page) => (
//           <button
//             key={page}
//             className={page === currentPage ? 'active' : ''}
//             onClick={() => handlePageChange(page)}
//           >
//             {page}
//           </button>
//         ))}

//         <button
//           className="next"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h2>Карточки</h2>
//       <div className="card-container">{renderCards()}</div>
//       {renderPagination()}
//     </div>
//   );
// };
    
    return (
        <div className='main'>
            <Typography content={'New releases books'} type={'H1'}/>
            {/* {isLoading ? <Spinner /> : ( */}
                <div className='blog__tabs'>
                <SmallCard />
               
                    
                    {/* Пагинация */}
                    <Subscription/>
                </div>
            {/* )} */}
        </div> 
    )
};
