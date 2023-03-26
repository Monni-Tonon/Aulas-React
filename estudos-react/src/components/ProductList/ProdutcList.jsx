import { Product } from "../Product/Product";

export function ProductList() {
return (
    //abro o fragmento pois irei usar varios itens (varios cards)
    <>
    {/* Comunicação direta de componentes */}
    <Product 
    image="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg" 
    name="Floresta lego" 
    description="Floresta Lego Modelo XPT 50 5000 peças" 
    price="200" />

<Product 
    image="https://m.media-amazon.com/images/I/81OqSTy+A1L._AC_UL320_.jpg" 
    name="Bonsai lego" 
    description="Bonsai 2000 peças" 
    price="420" />

<Product 
    image="https://m.media-amazon.com/images/I/81qkKtQ49GL._AC_UL320_.jpg" 
    name="Policia" 
    description="Carro de policia + policial LEgo 94 peças" 
    price="420" />
    </>
)

}