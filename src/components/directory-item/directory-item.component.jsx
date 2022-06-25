import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'

import React from 'react'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Comprar agora</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
