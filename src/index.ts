import Ajv from "ajv"
import {RootObject} from './schema/Schema'
import schema from './schema/schema.json';
import theme from './theme.json';
import { JsonValidator } from "./Validator";
import { generateSeed } from "./generateSeed";
import { generateSchemes } from "./generateSchemes";
import { generatePalletes } from "./generatePalletes";
import { writeToFile } from "./writeToFile";
import { themeFileName, themeFolderName, themeMixinsFileName, tokenFileName, typhographyFileName } from "./Constants";
import { generateStyles } from "./generateStyles";
import { generateTyphography } from "./generateTyphography";
import { generateTheme } from "./generateTheme";
import { generateThemeMixins } from "./generateThemeMixins";

const validateTheme = () : RootObject => {
    const ajv = new Ajv()

    const validator = new JsonValidator(ajv)

    const themes:RootObject  = validator.validate <RootObject>(schema,theme)
    return themes
}
const init = () => {
    const theme = validateTheme()
    let finalThemeContent = '';
    const seedContent = generateSeed(theme)
    const schemeContent = generateSchemes(theme)
    const palleteContent = generatePalletes(theme)
    const styleContent = generateStyles(theme)
    const typhographyContent = generateTyphography(theme)
    const themeContent = generateTheme(theme)
    const mixincontents = generateThemeMixins()
    finalThemeContent = seedContent+schemeContent+palleteContent+styleContent
    
    writeToFile(themeFolderName,tokenFileName,finalThemeContent)
    writeToFile(themeFolderName,typhographyFileName,typhographyContent)
    writeToFile(themeFolderName,themeMixinsFileName,mixincontents)
    writeToFile(themeFolderName,themeFileName,themeContent)

 
}

init()








