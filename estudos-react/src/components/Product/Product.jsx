import "./Product.css";

export function Product(props) {
    //crio as propriedades do obj "product"
        let image = props.image; // recebe uma propriedade chamada image
        let name = props.name;
        let description = props.description;
        let price = props.price;

    //dps retorno/atribuo o que preciso
        return (
        <div className="product">
            <img src={image}/> 
            <h3>{name}</h3>
            <span>{description}</span>
            <strong>R$ {price}</strong>
        </div>
    );
}