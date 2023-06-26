import { RootObject, Display, Styles, Large } from "./schema/Schema";
import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generateStyles = (theme : RootObject) : string => {
    let testContent = '';
    Object.keys(theme.styles).forEach(
      (item) => {
        
        Object.keys(theme.styles[item as keyof Styles]).forEach(
          (pal) => {
            testContent+=`/* ${item} - ${pal} */\n`
            Object.keys(theme.styles[item as keyof Styles][pal as keyof Display]).forEach(
              (fam)=>{
                const casedword : string = splitCamelCaseWord(item);
                const newfam : string = splitCamelCaseWord(fam);
                testContent+=`$md-sys-typescale-${casedword}-${pal}-${newfam}: ${theme.styles[item as keyof Styles][pal as keyof Display][fam as keyof Large]};\n`
              }
            )
          }
        )
      }
    )
    
    return testContent;
  
  }