import { createGlobalStyle, CSSObject } from "styled-components"
import { globalStyles } from "twin.macro"

const globals = {}

const GlobalStyles = createGlobalStyle(globalStyles as CSSObject, globals)

export default GlobalStyles
