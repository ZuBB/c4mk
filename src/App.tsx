import { SubmitHandler, useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ProductSubform from './ProductSubform'
import { FormData, Product } from './interfaces'
import './App.css'

const getNewProductStub = (index = 0): Product => {
  return {
    product: "Product " + (index + 1),
    price: 0,
    split: "",
    paid: ""
  }
}

const defaultValues: FormData = {
  totalPaidMarian: 0,
  totalPaidVasyl: 0,
  products: [getNewProductStub()]
};

function App() {
  const form = useForm<FormData>({ defaultValues })

  const { fields, append, remove } = useFieldArray({ control: form.control, name: "products" })

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values)
  }

  const addProductHandler = () => {
    append(getNewProductStub(fields.length))
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-[32rem]">
          <ProductSubform fields={fields} remove={remove} />

          <div>
            <Button
              type="button"
              onClick={addProductHandler}
              variant={'secondary'}
            >
                Add new product
            </Button>
          </div>

          <FormField
            control={form.control}
            name="totalPaidMarian"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="total-paid-marian">Total paid by Marian</FormLabel>
                <FormControl>
                  <Input type="number" {...field} id="total-paid-marian" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="totalPaidVasyl"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="total-paid-vasyl">Total paid by Vasyl</FormLabel>
                <FormControl>
                  <Input type="number" {...field} id="total-paid-vasyl" />
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <Button>Calculate totals!</Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default App
