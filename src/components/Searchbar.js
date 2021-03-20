

const Searchbar = ({width}) => {
  return (
    <>
        <input
            className={`shadow-md p-3 sm:p-5 pl-6 pr-6 text-black ${width}`}
            id="search"
            type="text"
            placeholder="Search..." />
    </>
  )
}

export default Searchbar
