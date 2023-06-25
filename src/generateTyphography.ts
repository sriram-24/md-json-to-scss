import { RootObject, Styles } from "./schema/Schema";
import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generateTyphography = (theme : RootObject) : string => {
    let testContent = '';
      Object.keys(theme.styles).forEach(
        (item) => {
          
          Object.keys(theme.styles[item as keyof Styles]).forEach(
            (pal) => {
              const casedword : string = splitCamelCaseWord(item);
                  
                  testContent+=`.${item}-${pal} {\n\tfont-family : ${`$md-sys-typescale-${casedword}-${pal}-font-family-name;`}\n\tfont-style :  ${`$md-sys-typescale-${casedword}-${pal}-font-family-style;`}\n\tfont-weight :  ${`$md-sys-typescale-${casedword}-${pal}-font-weight;`}\n\tfont-size :  ${`$md-sys-typescale-${casedword}-${pal}-font-size;`}\n\tletter-spacing :  ${`$md-sys-typescale-${casedword}-${pal}-letter-spacing;`}\n\tline-height :  ${`$md-sys-typescale-${casedword}-${pal}-line-height;`}\n\t\n}\n`
            }
          )
        }
      )
    return testContent;
  }