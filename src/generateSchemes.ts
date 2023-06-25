import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generateSchemes = (theme) => {
    let schemeContent = '';
    schemeContent+=`/* light */\n`
    Object.keys(theme.schemes.light).forEach(
        (item) => {
        
            let casedword = splitCamelCaseWord(item);
            schemeContent+=`$md-sys-color-${casedword}-light: ${theme.schemes.light[item]};\n`
        }
    )
    schemeContent+=`/* dark */\n`
    Object.keys(theme.schemes.dark).forEach(
        (item) => {
        
            let casedword = splitCamelCaseWord(item);
            schemeContent+=`$md-sys-color-${casedword}-dark: ${theme.schemes.dark[item]};\n`
        }
    )

    return schemeContent
  
}