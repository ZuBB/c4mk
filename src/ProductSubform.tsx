import { Control, FieldArrayWithId, UseFieldArrayRemove } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormData, PaidBy, ShareRule } from './interfaces'

type ProductSubform = {
  fields: FieldArrayWithId<FormData, 'products', 'id'>[],
  remove: UseFieldArrayRemove
  control: Control<FormData, unknown>
}

function ProductSubform({control, fields, remove}: ProductSubform) {
  return (
    <>
    {fields.map((product, index) => (
      <fieldset key={product.id} className="space-y-3 border-gray-200 border-2 p-2">
        <legend className="text-lg px-1">Товар #{index + 1}</legend>

        <FormField
          control={control}
          name={`products.${index}.product`}
          render={({ field }) => (
            <FormItem className='!-mt-1'>
              <FormControl>
                <Input
                  {...field}
                  id={"product-" + index}
                  placeholder="Назва товару"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`products.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  id={"price-" + index}
                  placeholder="Ціна товару"
                  pattern="[0-9]+(\.[0-9][0-9]?)?"
                  inputMode="numeric"
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`products.${index}.shareRule`}
          render={({ field }) => (
            <FormItem className="space-y-3 -mr-2">
              <FormLabel>Shared by</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-3"
                  required
                >
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={ShareRule.Fifty_Fifty}
                        id={"split-equal-" + index}
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor={"split-equal-" + index}>
                      50/50
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={ShareRule.One_to_Two}
                        id={"split-1vs2-" + index}
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor={"split-1vs2-" + index}>
                      1p/2p
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={ShareRule.MarianOnly}
                        id={"split-only-marian-" + index}
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor={"split-only-marian-" + index}>
                      Only Marian
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={ShareRule.VasylOnly}
                        id={"split-only-vasyl-" + index}
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor={"split-only-vasyl-" + index}>
                      Only Vasyl
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />


        <div className='flex flex-wrap justify-between items-center'>
          <FormField
            control={control}
            name={`products.${index}.paidBy`}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Оплачено ким:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                    required
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={PaidBy.Marian} id={"paid-by-marian-" + index} />
                      </FormControl>
                      <FormLabel className="font-normal" htmlFor={"paid-by-marian-" + index}>
                        Мар'ян
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={PaidBy.Vasyl} id={"paid-by-vasyl-" + index} />
                      </FormControl>
                      <FormLabel className="font-normal" htmlFor={"paid-by-vasyl-" + index}>
                        Василь
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {fields.length > 1 && (
            <Button
              type="button"
              onClick={() => remove(index)} variant={"destructive"}
            >
              Видалити
            </Button>
          )}
        </div>
      </fieldset>
    ))}
    </>
  )
}

export default ProductSubform
