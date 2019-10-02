import React from 'react'
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../../components/preview-collection/preview-collection'

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otheCollectionProps}) => (
                <PreviewCollection key={id} {...otheCollectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage)