import { Palettes } from "./schema/Schema";
import { Primary } from "./schema/Schema";
import { RootObject } from "./schema/Schema";
import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generatePalletes = (theme : RootObject) : string => {
    let palleteContent: string = '';
    Object.keys(theme.palettes).forEach(
      (item : any) => {
        const casedword : string = splitCamelCaseWord(item);
        palleteContent+=`/* ${casedword} */\n`
        Object.keys(theme.palettes[item as keyof Palettes]).forEach(
          (pal) => {
            
            palleteContent+=`$md-ref-pallete-${casedword+pal}: ${theme.palettes[item as keyof Palettes][pal as keyof Primary]};\n`
          }
        )
      }
    )
    
    return palleteContent;
  
}