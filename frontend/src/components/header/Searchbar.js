import React from 'react'
import './index.css'
import Searchsvg from '../../assests/Searchsvg'
import { useTaskContext } from '../../context/TaskContext'
function Searchbar() {
  const {searchWord,setSearchWord}=useTaskContext()
  return (
    <div className="searchbar">
      <span>
        <Searchsvg/>
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search..."
          value={searchWord}
          onChange={(e)=>setSearchWord(e.target.value)}
        />
      </span>
      </div>
  )
}

export default Searchbar
