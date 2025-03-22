import { useEffect, useState } from "react"
export const useFetchAPI = (path) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchApi = async() => {
            fetch(path)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
        }
        fetchApi();
    }, []);
    return product;
}