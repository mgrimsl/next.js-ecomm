import ProductPage from "./components/ProductPage";
async function getProductFetch (id) {
    const res = await fetch(`${process.env.API_URL}products/records/${id}`,{cache:'no-store'})

    const data = await res.json()
    console.log(data)
    return data;
}

export default async function page(props){
    let product = await getProductFetch(props.params.productId)
    console.log(product)
    return(
        <ProductPage product={product}/>
    )
}