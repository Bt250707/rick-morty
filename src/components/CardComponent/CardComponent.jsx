import React from 'react'
import './CardComponent.css'

const CardComponent = ({data}) => {
  return (
    <div className="card">
      <img className="char-img" src={data.image} alt={data.name} />
      <div className="card-body">
        <h2>{data.name}</h2>
        <p>Gender : {data.gender}</p>
        <p>Status : {data.status}</p>
        <p>Species : {data.species}</p>
      </div>
    </div>
  )
}

export default CardComponent