import { createContext, FunctionComponent } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

interface Context
{
  quotes: string[]
  addQuote: (_quote: string) => void
  removeQuote: (_quote: string) => void
}

const QuotesContext = createContext<Context>(null)

export const QuotesProvider: FunctionComponent = ({ children }) =>
{
  const [quotes, setQuotes] = useState<string[]>([])

  const addQuote = (quote: string) =>
  {
    setQuotes((prev) => [...prev, quote])
  }

  const removeQuote = (quote: string) =>
  {
    setQuotes((prev) => prev.filter((savedQuote) => savedQuote !== quote))
  }

  useEffect(() =>
  {
    const savedQuotes = window.localStorage.getItem("quotes")
    if (savedQuotes)
    {
      setQuotes(savedQuotes.split("/"))
    }
  }, [])

  useEffect(() =>
  {
    window.localStorage.setItem("quotes", quotes.join("/"))
  }, [quotes])

  return <QuotesContext.Provider value={{ quotes, addQuote, removeQuote }}>
    {children}
  </QuotesContext.Provider>
}

export const useQuotes = (): Context =>
{
  const context = useContext(QuotesContext)
  if (!context) throw Error("No Quotes Context found. Make sure you are inside a provider")
  return context
}
