import { useEffect, useState } from 'react'
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form"
import now from '~build/time';
import { sha } from '~build/git';
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import ProductSubform from './ProductSubform'
import Stats from './Stats'
import { calcSummary } from './calc-summary'
import { FormData, Results, Product } from './interfaces'

const attrName = 'data-buildmetadata';
const attrValue = sha.slice(0, 8) + ':' + now.toISOString();

const getNewProductStub = (): Product => {
  return {
    product: '',
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
  const [results, setResults] = useState<Results | null>(null);

  const onSubmit: SubmitHandler<FormData> = (values) => {
    setResults(calcSummary(values.products));
  }

  const addProductHandler = () => {
    append(getNewProductStub())
  }

  useEffect(() => {
    document.head.setAttribute(attrName, attrValue)
  }, [])

  return (
    <>
      <Form {...form}>
        <form
          id="calc-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-2 p-2 space-y-4 max-w-[32rem] border-gray-400 border-2"
        >
          <h1 className="text-2xl">Калькулятор витрат</h1>

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
                Додати новий товар
            </Button>
          </div>
        </form>
      </Form>

      <div className="my-2 ml-2">
        <Button form="calc-form" className='bg-blue-600 font-bold'>
          Порахувати
        </Button>
      </div>

      {results && (<Stats results={results} />)}
    </>
  )
}

export default App
