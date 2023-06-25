import { splitCamelCaseWord } from "./splitCamelCasedWord";

export const generatePalletes = (theme) => {
    let palleteContent = '';
    Object.keys(theme.palettes).forEach(
      (item) => {
        const casedword = splitCamelCaseWord(item);
        palleteContent+=`/* ${casedword} */\n`
        Object.keys(theme.palettes[item]).forEach(
          (pal) => {
            
            palleteContent+=`$md-ref-pallete-${casedword+pal}: ${theme.palettes[item][pal]};\n`
          }
        )
      }
    )
    
    return palleteContent;
  
}