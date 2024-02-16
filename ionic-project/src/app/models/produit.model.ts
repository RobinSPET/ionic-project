export class Produit {
    id ?: number;
    title ?: string;
    price ?: number;

    constructor(
        id = 0,
        title = "",
        price = null
    ){}
}
