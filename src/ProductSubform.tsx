function ProductSubform() {
  return (
    <fieldset>
      <legend>Product 1</legend>
      <div>
        <label htmlFor="product">Enter name of the product</label>
        <input type="text" name="product" placeholder="Product X" />
      </div>
      <div>
        <label htmlFor="">Enter price of the product</label>
        <input type="text" name="price" placeholder="Product price" />
      </div>
      <div>
        <span>Used by</span>:
        <input type="radio" name="split" id="split-equal" value="1" />
        <label htmlFor="split-equal">50-50</label>
        <input type="radio" name="split" id="split-1/2" value="2" />
        <label htmlFor="split-1/2">33-67</label>
        <input type="radio" name="split" id="split-oM" value="3" />
        <label htmlFor="split-oM">Only Marian</label>
        <input type="radio" name="split" id="split-oV" value="4" />
        <label htmlFor="split-oV">Only Vasyl</label>
      </div>
      <div>
        <span>Paid by</span>:
        <input type="radio" name="paid" id="paid-m" value="1" />
        <label htmlFor="paid-m">Marian</label>
        <input type="radio" name="paid" id="paid-v" value="2" />
        <label htmlFor="paid-v">Vasyl</label>
      </div>
      <div>
        <button type="button">Remove this product</button>
      </div>
    </fieldset>
  )
}

export default ProductSubform
