import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Data/Post'
import Shops from './Shops'
import Card from './Card.module.css'
import Wrapper from './Wrapper.module.css'

function Shop() {
  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://my.api.mockaroo.com/for_delivery.json?'
        )
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const filteredData = data
    ? data.filter((item) => item.slug === params.slug)
    : null

  return (
    <div className={Wrapper.wrapper}>
      <Shops />
      {filteredData ? (
        <div className={Card.card}>
          {filteredData.map((item) => (
            <Post key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  )
}

export default Shop
