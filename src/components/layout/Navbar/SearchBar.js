import React, { useState } from 'react'
import Select from 'react-select-virtualized'
import { stocks } from '../../../assets/stocks'

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (e) => {
    console.log(e.value)
    setSelectedOption(e.value)
  }
  return (
    <Select value={selectedOption} onChange={handleChange} options={stocks} />
  )
}

export default SearchBar
