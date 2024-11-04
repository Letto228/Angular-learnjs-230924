import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

export function getNextProducts(chunkSize: number, lastId?: Product['_id']): Product[] {
    if (!lastId) {
        return productsMock.slice(0, chunkSize);
    }

    const lastLoadedIndex = productsMock.findIndex(({_id}) => lastId === _id);
    const nextIndex = lastLoadedIndex + 1;

    return lastLoadedIndex !== -1 ? productsMock.slice(nextIndex, nextIndex + chunkSize) : [];
}
