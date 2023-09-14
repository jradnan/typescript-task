
type ProductType = {
    name : string;
    price : number;
    description : string;
    imageURL : string;
}
const Product = ({name, price, description, imageURL} : ProductType) => {
    return (
        <div className="bg-black text-white ">
            <img src={imageURL} alt={name} />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Product;