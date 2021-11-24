const mapProducts = (array) => {
    let mymap = new Map();
    let uniqueProducts = array.filter(el => {
        const val = mymap.get(el.productDescription);
        if(val) {
            if(el.productId < val) {
                mymap.delete(el.productDescription);
                mymap.set(el.productDescription, el.productId);
                return true;
            } else {
                return false;
            }
        }
        mymap.set(el.productDescription, el.productId);
        return true;
    });
    return uniqueProducts
}

export default mapProducts;