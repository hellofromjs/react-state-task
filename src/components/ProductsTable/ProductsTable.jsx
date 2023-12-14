import { useState } from "react";
import Filtering from "../Filtering/Filtering";

export default function ProductsTable({products})
{
    const [filters, setFilters] = useState({
        filterKey: '',
        filterValue: ''
    })

    function filterProducts()
    {
        return products.filter(product => {
            if (filters.filterValue == "") {
                return true;
            } else if (filters.filterKey == 'product_name')
            {
                if (product.name == filters.filterValue) return true
            
            } else if (filters.filterKey == 'product_amount')
            {
                if (product.amount == filters.filterValue) return true
            } else if (filters.filterKey == 'product_price')
            {
                if (product.price == filters.filterValue) return true
            }
        })
    }

    return (
        <>
        <table className="table mt-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {filterProducts().map(product =>
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.amount}</td>
                        <td>{product.price}</td>
                    </tr>
                )}
            </tbody>
        </table>

        <Filtering filter={setFilters} />
       
        </>
    )
}