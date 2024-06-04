import { SubmitHandler, useForm, useFieldArray } from "react-hook-form"
import ProductSubform from './ProductSubform'
import { FormData } from './interfaces'
import './App.css'

const getNewProductStub = (index = 0) => {
  return {
    product: "Product " + (index + 1),
    price: null,
    split: null,
    paid: null
  }
}

const defaultValues: FormData = {
  totalPaidM: 0,
  totalPaidV: 0,
  products: [getNewProductStub()]
};

function App() {
  const {
    control,
    handleSubmit,
    register,
  } = useForm<FormData>({ defaultValues })

  const { fields, append, remove } = useFieldArray({ control, name: "products" })

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values)
  }

  const addProductHandler = () => {
    append(getNewProductStub(fields.length))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductSubform fields={fields} remove={remove} />

        <div>
          <button type="button" onClick={addProductHandler}>Add new product</button>
        </div>

        <div>
          <label htmlFor="total-paid-marian">Paid by Marian</label>
          <input type="text" {...register("totalPaidM")} id="total-paid-marian" />
        </div>
        <div>
          <label htmlFor="total-paid-vasyl">Paid by Vasyl</label>
          <input type="text" {...register("totalPaidV")} id="total-paid-vasyl"/>
        </div>

        <div>
          <button>Calculate totals!</button>
        </div>
      </form>
    </>
  )
}

export default App
