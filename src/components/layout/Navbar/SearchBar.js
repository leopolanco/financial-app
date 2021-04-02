import React, { useState } from 'react'
import Select, { createFilter } from 'react-select'
import { stocks } from '../../../assets/stocks'
import {optimizeSelect} from './SelectHelper.tsx'

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (e) => {
    console.log(e.value)
    setSelectedOption(e.value)
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={stocks}
      filterOption={createFilter({ ignoreAccents: false })}
      components={optimizeSelect.components}
    />
  )
}

export default SearchBar
