import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.scss'
import PreviewCollection from '../preview-collection/preview-collection'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        { collections.map(({id, ...otheCollectionProps}) => (
            <PreviewCollection key={id} {...otheCollectionProps} />
        ))} 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview)