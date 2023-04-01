import {useSelector, useDispatch} from "react-redux";
import './pagination.css';
import { getRefreshPagination } from "../../redux/actions";
import { useState } from "react";
import Loading from "../Loading/Loading";
import './pagination.css'

const Pagination = () => {
  
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {page,limit,total,filters} = useSelector(state => state.infoPagination);
  const stateofResult = total === 0 ;
  const lastPage = !isNaN(total) && total !== 0? Math.ceil(total/limit) : 1;
  const prevNumber = page-1 > 3;
  const nextNumbers = lastPage-page > 3;
  const button = [];
  const condition = lastPage !== 1

  for(let x=-2; x <= 2; x++){
    let num = page+x
    if(num > 1 && num < lastPage) button.push(num)
  }

  const changePage = ({target}) => {
    setIsLoading(true);
    const value = target.value;
    if(value ==='prev'){
      if(page !== 1) dispatch(getRefreshPagination({page:page-1,filters}))
    }else if(value ==='next'){
      if(page !== lastPage) dispatch(getRefreshPagination({page:page+1,filters}))
    }else {
    dispatch(getRefreshPagination({page:Number(value),filters}))
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return(
    <div className="pagination">
      {isLoading && <Loading/>}
      {stateofResult? <div><h2>The search returned no results</h2></div>:
      <div>
        <button value='prev'className={page===1?"isActive":"noActive"} disabled={page===1? true: false} onClick={changePage}>PREV</button>
        <button value='1' className={page===1?"isActive":"noActive"} disabled={page===1? true: false} onClick={changePage} >1</button>
        {prevNumber && <label>...</label>}
        {button.map(num => <button key={num} value={`${num}`} className={page===num?"isActive":"noActive"} disabled={page===num? true: false} onClick={changePage} >{num}</button>)}
        {nextNumbers && <label>...</label>}
        {condition && <button value={`${lastPage}`} className={page===lastPage?"isActive":"noActive"} onClick={changePage} disabled={page===lastPage? true: false} >{lastPage}</button>}
        <button value={'next'} className={page===lastPage?"isActive":"noActive"} disabled={page===lastPage? true: false} onClick={changePage} >NEXT</button>
      </div>}
    </div>
  )

};

export default Pagination