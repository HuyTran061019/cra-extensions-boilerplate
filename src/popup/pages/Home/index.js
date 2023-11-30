import React,{useState} from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Home() {
  const [dataList, setDataList] = useState([])

  useEffect(()=>{
    fetch('https://api.publicapis.org/entries',{
      method: "GET",
      contentType: "application/json"
    }).then(res=> res.json())
    .then(data=> {
      setDataList(data.entries)
    })
    .catch(error=> console.log(error))
  })
  console.log(dataList[0]?.API);
  return (
    <div>
          <h1>This is my homepage</h1>
          <h2> Please show the data: {dataList[0]?.API}</h2>
          <Link to='/note'> Try me 12345</Link>
    </div>

    
  )
}

export default Home