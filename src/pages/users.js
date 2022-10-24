import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import UsersInfo from "../components/UsersInfo"
import Pagination from "../components/Pagination"

export default function Users() {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [maxPageRange, setMaxPageRange] = useState(5)
  const [minPageRange, setMinPageRange] = useState(0)
  const pageLimit = 5
  let pageNumbers = null

  // Assuming different constant total number of pages
  const maxPage = 50
  const numPerPage = 5
  const seed = "987"
  const arr = [...Array(maxPage)].map((_, index) => index + 1)

  useEffect(() => {
    setLoading(true)
    console.log("page: " + page)
    fetch(
      `https://randomuser.me/api/?results=${numPerPage}&seed=${seed}&page=${page}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setUsers(data?.results)
        // console.log(data)
      })
  }, [page])

  const handleNextClick = () => {
    if ((page + 1) % pageLimit === 0) {
      setMaxPageRange((prev) => prev + pageLimit)
      setMinPageRange((prev) => prev + pageLimit)
    }
    setPage((prev) => prev + 1)
  }

  const handlePrevClick = () => {
    if ((page - 1) % pageLimit === 0) {
      setMaxPageRange((prev) => prev - pageLimit)
      setMinPageRange((prev) => prev - pageLimit)
    }
    setPage((prev) => prev - 1)
  }

  const jumpPages = (e) => {
    setPage(Number(e.target.id))
  }

  pageNumbers = arr.slice(minPageRange, maxPageRange).map((each) => (
    <button className="pageNumBtn" id={each} key={each} onClick={jumpPages}>
      {each}
    </button>
  ))

  return loading ? (
    <Loading />
  ) : (
    <div className="users">
        <UsersInfo data={users} />
        <div style={{fontSize: "10px"}}>
        Page {page} of {maxPage}
      </div>
      <Pagination
        curPage={page}
        maxPage={maxPage}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
        pageNumbers={pageNumbers}
      />
    </div>
  )
}
