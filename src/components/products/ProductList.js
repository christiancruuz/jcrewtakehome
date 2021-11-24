import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {getProducts, getProduct} from '../../actions/productActions';
import mapProducts from './map-products';
function ProductList({product, getProducts, getProduct}) {
    useEffect(() => {
        getProducts();
    },[getProducts]);

    const routeToProduct = (product) => {
        getProduct(product)
    }

    const productList = mapProducts(product.products); //imported function returns unique products

    return (
        <div className='product-list'>
            {productList.map(product => 
            <div className='product-container'>
                <Link
                     onClick={()=>routeToProduct(product)} 
                     key={product.productCode} 
                     to={`/${product.productCode}`}
                >
                    <img 
                        alt='jcrew product' 
                        className='product-img' 
                        src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${product.defaultColorCode}`} 
                    />
                </Link>
                <div className='product-info'>
                    <div>{product.productDescription}</div>
                    <strong>{product.now !== undefined ? product.now.formatted : product.listPrice.formatted}</strong>
                </div>
            </div>
            )}
        </div>
    )
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    {getProducts, getProduct}
)(withRouter(ProductList))