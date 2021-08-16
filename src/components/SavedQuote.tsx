import { h, FunctionComponent } from "preact"
import { Button } from "./Button"
import tw from "twin.macro"
import { useQuotes } from "../context/QuotesContext"

interface Props
{
  quote: string
}

const SavedQuote: FunctionComponent<Props> = ({ quote }) =>
{
  const { removeQuote } = useQuotes()

  return <div tw="flex flex-row justify-between space-x-4 bg-gray-200 p-2 rounded-lg shadow-lg items-center">
    <p tw="font-bold">"{quote}"</p>
    <div>
      <Button onClick={() => removeQuote(quote)}>
        X
      </Button>
    </div>
  </div>
}

export default SavedQuote
