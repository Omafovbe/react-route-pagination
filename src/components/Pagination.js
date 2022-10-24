
const Pagination = (props) => {
    const { onPrevClick, onNextClick, pageNumbers, curPage, maxPage } = props


    return (
        <div>
            <button className="pageBtn" onClick={onPrevClick} aria-disabled={curPage <= 1} disabled={curPage <= 1}>Prev</button>
            {pageNumbers}
            <button className="pageBtn" onClick={onNextClick} aria-disabled={curPage >= maxPage} disabled={curPage >= maxPage}>Next</button>
        </div>
    )
}

export default Pagination