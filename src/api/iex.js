import axios from 'axios'

export default axios.create({
    baseURL: 'https://sandbox.iexapis.com/stable/',
    params: {
        token: process.env.REACT_APP_IEX_KEY
    }
})
