import { SubmitHandler, useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import ProductSubform from './ProductSubform'
import { calcSummary } from './calc-summary'
import { FormData, Product } from './interfaces'
import './App.css'

const getNewProductStub = (index = 0): Product => {
  return {
    product: "Product #" + (index + 1),
    price: '',
    shareRule: '',
    paidBy: ''
  }
}

const defaultValues: FormData = {
  products: [getNewProductStub()]
};

function App() {
  const form = useForm<FormData>({ defaultValues, mode: 'onChange' })
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'products' })

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(calcSummary(values.products))
  }

  const addProductHandler = () => {
    append(getNewProductStub(fields.length))
  }

  return (
    <>
      <Form {...form}>
        <form
          id="calc-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-2 p-2 space-y-4 max-w-[32rem] border-gray-400 border-2"
        >
          <h1 className="text-2xl">Shopping calculator</h1>

          <ProductSubform
            fields={fields}
            remove={remove}
            control={form.control}
          />

          <div>
            <Button
              type="button"
              onClick={addProductHandler}
              variant={'secondary'}
            >
                Add new product
            </Button>
          </div>
        </form>
      </Form>

      <div className="mt-2 ml-2">
        <Button form="calc-form">Calculate totals!</Button>
      </div>
    </>
  )
}

export default App
