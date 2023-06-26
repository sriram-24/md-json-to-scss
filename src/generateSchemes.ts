import { Light, RootObject,Dark } from "./schema/Schema";
import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generateSchemes = (theme : RootObject) : string => {
    let schemeContent = '';
    schemeContent+=`/* light */\n`
    
    Object.keys(theme.schemes.light).forEach(
        (item) => {
        
            const casedword : string = splitCamelCaseWord(item);
            schemeContent+=`$md-sys-color-${casedword}-light: ${theme.schemes.light[item as keyof Light]};\n`
        }
    )
    
    schemeContent+=`/* dark */\n`
    Object.keys(theme.schemes.dark).forEach(
        (item) => {
        
            const casedword : string = splitCamelCaseWord(item);
            schemeContent+=`$md-sys-color-${casedword}-dark: ${theme.schemes.dark[item as keyof Dark]};\n`
        }
    )

    return schemeContent
  
}