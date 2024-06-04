import { FieldArrayWithId, UseFieldArrayRemove, useForm } from 'react-hook-form'
import { FormData } from './interfaces'

type ProductSubform = {
  fields: FieldArrayWithId<FormData, 'products', 'id'>[],
  remove: UseFieldArrayRemove
}

function ProductSubform({fields, remove}: ProductSubform) {
  const { register } = useForm();

  return (
    <>
    {fields.map((product, index) => (
      <fieldset key={product.id}>
        <legend>Product {index + 1}</legend>

        <div>
          <label htmlFor={"product-" + index}>Enter name of the product</label>
          <input
            {...register(`products.${index}.product`)}
            id={"product-" + index}
            placeholder={"Product " + (index + 1)}
            type="text"
          />
        </div>

        <div>
          <label htmlFor={"price-" + index}>Enter price of the product</label>
          <input
            {...register(`products.${index}.price`, { required: true })}
            id={"price-" + index}
            placeholder="Product price"
            type="text"
          />
        </div>

        <div>
          <span>Used by</span>:

          <input
            {...register(`products.${index}.split`, { required: true })}
            id={"split-equal-" + index}
            type="radio"
            value="1"
          />
          <label htmlFor={"split-equal-" + index}>50/50</label>

          <input
            {...register(`products.${index}.split`, { required: true })}
            id={"split-1vs2-" + index}
            type="radio"
            value="2"
          />
          <label htmlFor={"split-1vs2-" + index}>33-67</label>

          <input
            {...register(`products.${index}.split`, { required: true })}
            id={"split-only-marian-" + index}
            type="radio"
            value="3"
          />
          <label htmlFor={"split-only-marian-" + index}>Only Marian</label>

          <input
            {...register(`products.${index}.split`, { required: true })}
            id={"split-only-vasyl-" + index}
            type="radio"
            value="4"
          />
          <label htmlFor={"split-only-vasyl-" + index}>Only Vasyl</label>
        </div>

        <div>
          <span>Paid by:</span>

          <input
            {...register(`products.${index}.paid`, { required: true })}
            id={"paid-by-marian-" + index}
            type="radio"
            value="1"
          />
          <label htmlFor={"paid-by-marian-" + index}>Marian</label>

          <input
            {...register(`products.${index}.paid`, { required: true })}
            id={"paid-by-vasyl-" + index}
            type="radio"
            value="2"
          />
          <label htmlFor={"paid-by-vasyl-" + index}>Vasyl</label>
        </div>

        <div>
          <button type="button" onClick={() => remove(index)}>
            Remove this product
          </button>
        </div>
      </fieldset>
    ))}
    </>
  )
}

export default ProductSubform
