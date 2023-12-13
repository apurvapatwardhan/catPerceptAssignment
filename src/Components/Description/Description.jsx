import { Link, useParams } from 'react-router-dom'
import './Description.css'
import { AppContext } from '../../Context/AppProvider'
import { useContext } from 'react'

function Description() {
  const { catsData } = useContext(AppContext)
  const params = useParams()
  const currData = catsData[params?.idx]
  return (
    <div className="cats-data">
      <div className="cat--image">
        <img src={currData?.image?.url} height={currData?.image?.height} width={currData?.image?.width}></img>
      </div>
      <div className="cat-desc">
        <div className="cat--char">
          <div>Name:</div>
          <div>{currData?.name}</div>
        </div>
        <div className="cat--char">
          <div>Origin:</div>
          <div>{currData?.origin}</div>
        </div>
        <div className="cat--char">
          <div>Weight (in metric):</div>
          <div>{currData?.weight?.imperial} ({currData?.weight?.metric})</div>
        </div>
        <div className="cat--char">
          <div>Hairless:</div>
          <div>{currData?.hairless}</div>
        </div>
        <div className="cat--char">
          <div>Wikipedia:</div>
          <div><Link to={currData?.wikipedia_url}>Link To Wikipedia</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Description
