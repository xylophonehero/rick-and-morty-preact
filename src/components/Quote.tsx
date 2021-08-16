import { useState, useEffect } from 'preact/hooks';
import { handlePromise } from '../utils/handlePromise';
import { FunctionalComponent, h } from 'preact';
import tw from "twin.macro"
import { Button } from './Button';
import { useQuotes } from '../context/QuotesContext';


const Wrapper = tw.div`flex-1 bg-gray-200 flex flex-col justify-center h-full`

interface ApiResponse
{
  data: string[]
}

const Quote: FunctionalComponent = () =>
{
  const { quotes, addQuote } = useQuotes()
  const [quote, setQuote] = useState("")

  const getQuote = async () =>
  {
    const [data, err] = await handlePromise<ApiResponse>(fetch("http://loremricksum.com/api/?paragraphs=1&quotes=1")
      .then((res) => res.json()))
    if (err)
    {
      console.error(err)
      return
    }
    if (!data.data[0])
    {
      console.error("No quote found")
      return
    }
    setQuote(data.data[0])
  }

  useEffect(() =>
  {
    getQuote()
  }, [])

  const alreadySavedQuote = quotes.some((x) => x === quote)

  return (
    <div tw="bg-gray-200 flex flex-col justify-center h-full p-4">
      <h2 tw="py-8 text-center text-3xl font-bold">"{quote}"</h2>
      <div tw="flex space-x-4 mx-auto py-4">
        <Button onClick={getQuote}>
          Get quote
        </Button>
        <Button disabled={alreadySavedQuote} onClick={() => addQuote(quote)}>
          Save quote
        </Button>
      </div>
    </div>
  )
}

export default Quote
