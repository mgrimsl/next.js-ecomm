import React from "react";
import Catalog from "./componets/Catalog";

async function getProducts (categories) {
    if(categories && !Array.isArray(categories)){
        categories = [categories]
    }
    let params = ""
    if(categories){
        params = '?filter=('
        categories.forEach((category,index) => {
            category = category.replace(" ", "_")
            if(index!==0){
                params += ' || '
            }
            params += `category='${category}'`
        
        });
        params += ")"
        console.log(params)
    }
    const res = await fetch(`${process.env.API_URL}products/records${params}`,{
       cache:'no-store' 
    }).catch(error=>{
        console.log(error);
    })

    const data = await res.json()
    if(data.code === 400){
        return []
    }    
    return data.items;
}
async function getCategories () {
    const res = await fetch(`${process.env.API_URL}categories/records?fields=category`,{
       cache:'no-store' 
    })

    const data = await res.json()
    let categories = data.items.map(x=>x.category)
    return categories;
}
export default async function Page(context){
    let products = await getProducts(context.searchParams.category)
    let categories = await getCategories()


    return(
        <div style={{margin:'20px'}}>
            <Catalog products={products} categories={categories}></Catalog>
        </div>
    )
}