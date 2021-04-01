import axios from 'axios'
import React, { useState, useEffect } from 'react'
import iex from '../../../api/iex'

const Navbar = () => {
  const [stock, setStock] = useState({
    name: '',
    symbol: '',
    price: 0
  })
  const { name, symbol, price } = stock
  const [search, setSearch] = useState('')
  const [result, setResult] = useState({})
  const searchApi = async (searchQ) => {
    searchQ = searchQ.replace(/\s/g, '')
    try {
      const {data, data: {symbol, latestPrice }} = await axios.get(`https://sandbox.iexapis.com/stable/stock/${searchQ}/quote`,{

      params:{
        token: process.env.REACT_APP_IEX_KEY
      }
      })
      setResult(data)
      console.log(latestPrice)
      console.log(symbol)
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (result) {
      setStock({
        name: result.companyName,
        symbol: result.symbol,
        price: result.latestPrice
      })
    }
  }, [result])

  const onSubmit = (e) => {
    e.preventDefault()
    searchApi(search)
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
        <h1>
          Stock: {name} - {symbol}
        </h1>
        <h3>Price: {price}</h3>
      </div>
    </>
  )
}
export default Navbar
