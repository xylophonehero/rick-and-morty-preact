import { FunctionComponent, h } from 'preact'
import { useQuotes } from '../context/QuotesContext'
import SavedQuote from "./SavedQuote"
import tw from "twin.macro"

const SavedQuotes: FunctionComponent = () =>
{
  const { quotes } = useQuotes()



  return (
    <div tw="flex-1 flex-shrink-0">
      <div tw="p-4 space-y-4">
        {quotes.map((quote) => <SavedQuote key={quote} quote={quote} />)}
      </div>
    </div>
  )
}

export default SavedQuotes
