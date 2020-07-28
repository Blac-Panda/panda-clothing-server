import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item'

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} /> 
                ))
            }
        </div>
    </div>
)

export default PreviewCollection