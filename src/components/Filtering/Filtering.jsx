import { useState } from "react"

export default function Filtering({filter})
{
    const [formData, setFormData] = useState({
        product_name: '',
        product_amount: '',
        product_price: '',
    })

    const [showFiltering, setShowFiltering] = useState(false)

    function handleChange (e) {
        setFormData({...formData, [e.target.name]: e.target.value})
        filter({filterKey: e.target.name, filterValue: e.target.value})
    }

    function toggleShow()
    {
        setShowFiltering(oldValue => !oldValue)
    }

    return (
        <>
        <a href="#" className="btn btn-primary" onClick={toggleShow} >Filter</a>

        {showFiltering && 
            <div className="mt-3">
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="product-name" name="product_name" onChange={handleChange} value={formData.product_name}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="product-amount" className="form-label">Product Amount</label>
                    <input type="number" className="form-control" id="product-amount" name="product_amount" onChange={handleChange} value={formData.product_amount}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Producto Price</label>
                    <input type="number" className="form-control" id="product-price" name="product_price" onChange={handleChange} value={formData.product_price}/>
                </div>
            </div>
        }
        </>
    )
}