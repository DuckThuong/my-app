import { useParams } from "react-router-dom";
import { products } from "../Products/Products"

export const ViewDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    if (!product) {
        return <h2>Product not found</h2>;
      }
    return (
                <>
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Giá: <strong>{product.price.toLocaleString()} VND</strong></p>
                </>
    )
}