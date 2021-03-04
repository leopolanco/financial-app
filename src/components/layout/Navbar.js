import React, { useState, useEffect } from 'react'
import iex from '../../api/iex'

const Navbar = () => {
  const [stock, setStock] = useState({
    name:'',
    symbol:'',
    price:0
  })
  const {name, symbol, price} = stock
  const [search, setSearch] = useState('')
  const [result, setResult] = useState({})
  const searchApi = async (search) => {
    try {
      const response = await iex.get(`stock/${search}/batch?types=quote`)
      setResult(response.data.quote)
      console.log('call to api')
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {
    console.log('2nd use')
    if(result){
    setStock({
      name:result.companyName,
      symbol:result.symbol,
      price: result.latestPrice
    })}
  }, [result])


  const onSubmit = e => {
    e.preventDefault()
    searchApi(search)
  }
  return <>
  <div>
    <h1>Stock: {name} - {symbol}</h1>
    <h3>Price: {price}</h3>
    <form onSubmit={onSubmit}>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button type='submit'>Search</button>
    </form>
  </div>
  
  
  </>
}
export default Navbar
