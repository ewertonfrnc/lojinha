import { useNavigate } from 'react-router-dom'
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title, route } = category

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Buy now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
