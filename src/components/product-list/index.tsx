import { useFilterContext } from '../../contexts/filter';
import GridView from '../grid-view';
import ListView from '../list-view';

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();

  if (filteredProducts.length < 1) {
    return (
      <h4 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search
      </h4>
    );
  }
  if (gridView === false) {
    return <ListView products={filteredProducts} />;
  }
  return <GridView products={filteredProducts} />;
};

export default ProductList;
