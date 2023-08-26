import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="item-container">
      <img className="place-image" src={imgUrl} alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
