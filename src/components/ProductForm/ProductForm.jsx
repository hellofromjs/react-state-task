import { useState } from "react"

let id = 0

export default function ProductForm({onSubmit})
{
    const [formData, setFormData] = useState({
        product_id: 0,
        product_name: '',
        product_amount: '',
        product_price: '',
    })


    function handleChange (e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleFormSubmit(e)
    {
        e.preventDefault()
        id++
        onSubmit({id: id, name: formData.product_name, amount: formData.product_amount, price: formData.product_price})
    }

    return (
        <form className="mt-3">
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
         
            <button onClick={handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}