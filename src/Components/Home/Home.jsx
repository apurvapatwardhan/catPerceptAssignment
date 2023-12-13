import { useContext } from 'react'
import './Home.css'
import { AppContext } from '../../Context/AppProvider'
import { NavLink } from 'react-router-dom'

function Home() {
  const { catsData } = useContext(AppContext)
  return (
    <div>
      <div className="breed_table">
        <div className="breed_item">
          <div className='bt-heading'>Breed Name</div>
          <div className='bt-heading'>Breed Origin</div>
        </div>
        {catsData?.map((el, idx) => {
          return (
            <div key={el.id} className="breed_item">
              <NavLink to={`/${idx}`}><div className="link">{el.name}</div></NavLink>
              <div>{el.origin}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
