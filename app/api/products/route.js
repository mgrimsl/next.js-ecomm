export const GET = async (request) =>{
    let products = [
        {
            id:1,
            title:'Hat',
            price:'$2.00',
            category:'Apperal',
            description:'A Hat',
            image:'/hat.png'
        },
        {
            id:30,
            title:'...',
            price:'...',
            category:'...',
            description:'...',
            image:'...'
        }
    ]
    console.log(products)
    try{
        return new Response(JSON.stringify(products), {status : 200})
    }catch (e){
        return new Response("Failed to fetch all", {status : 500})
    }

}