import { themeMixinsFileName, tokenFileName, typhographyFileName } from "./Constants";
import { RootObject } from "./schema/Schema";
import { splitCamelCaseWord } from "./splitCamelCasedWord";

const generateVariablesLight = (theme : RootObject) : string => {
    let testContent : string = '';
    testContent+=``
    Object.keys(theme.schemes.light).forEach(
      (item) => {
        const casedword : string = splitCamelCaseWord(item);
          testContent+=`\tmd-sys-color-${casedword} : $md-sys-color-${casedword}-light,\n`
      }
    )
    
    return testContent
  
}
  
const generateVariablesDark = (theme : RootObject) : string => {
    let testContent :string = '';
    testContent+=``
    Object.keys(theme.schemes.dark).forEach(
      (item) => {
        const casedword : string = splitCamelCaseWord(item);
          testContent+=`\tmd-sys-color-${casedword} : $md-sys-color-${casedword}-dark,\n`
      }
    )
    
    
    return testContent
  
}
  
export const generateTheme = (theme : RootObject) : string => {
    let testContent = '';
    let variablesLight = generateVariablesLight(theme)
    let variablesdark = generateVariablesDark(theme)
    testContent+=`@import "${tokenFileName}";\n@import "${themeMixinsFileName}";\n@import "${typhographyFileName}";\n$themes:(\n\tlight:(\n${variablesLight}\n),\n\tdark:(\n${variablesdark}\n)\n);`
    return testContent;
}
  