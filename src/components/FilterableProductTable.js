import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState(" ");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}
