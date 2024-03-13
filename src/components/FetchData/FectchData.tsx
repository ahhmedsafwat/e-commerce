import { useQuery } from "@tanstack/react-query"
import Axios  from "axios"

interface Products{
    id:number,
    title:string,
    price:number,
    image:string
}
const FetchData = ()=>{

    const { isPending, error, data:fakeData } = useQuery<Products[]>({
        queryKey:["fake"],
        queryFn:async () => {
            const response = await Axios.get('https://fakestoreapi.com/products/category/electronics');
            return response.data;
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return(
        <div>
            {fakeData && fakeData.map(product => (
        <div key={product.id}  className="w-1/4">
            <img src={product.image} alt=""/>
        <p>{product.title}</p>
        </div>
    ))}
        </div>
    )
}

export default FetchData