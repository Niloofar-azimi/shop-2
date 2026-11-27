"use client";
import { useRouter,useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';

function Pagination({pageCount}:{pageCount:number}) {
  const searchParames=useSearchParams()
    const router=useRouter();
    const handlePageClick=(e:{selected:number})=>{
        const page=e.selected+1;
          const currentSearchParams=new URLSearchParams(searchParames.toString());
           currentSearchParams.set("page",page.toString());
            currentSearchParams.set("per_page","2")
         
        router.push(`/store?page=${page}&per_page=4`)


    }
  return (
    <div> <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /></div>
  )
}

export default Pagination