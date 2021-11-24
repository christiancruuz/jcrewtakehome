import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
function ProductPage({product}) {
    return (
        <div className='product-page-container'>
            <div className='product-grid'>
                <img 
                alt='jcrew product' 
                className='product-page-img' 
                src={`https://www.jcrew.com/s7-img-facade/${product.product.productCode}_${product.product.defaultColorCode}`} 
                />
                <div className='product-page-details'>
                    <div className='product-info'>
                        <div>{product.product.productDescription}</div>
                        <strong>{product.product.now !== undefined ? product.product.now.formatted : product.product.listPrice.formatted}</strong>
                        <div className='color-txt'>Available Colors:</div>
                    {product.product.colors.map(color => 
                        <img 
                            alt='color swatch' 
                            src={`https://www.jcrew.com/s7-img-facade/${product.product.productCode}_${color.colorCode}_sw`} 
                            className='swatch-img'
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps
)(withRouter(ProductPage))