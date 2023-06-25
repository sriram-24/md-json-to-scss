import Ajv from "ajv"
import {RootObject} from './schema/Schema'
import schema from './schema/schema.json';
import theme from './theme.json';
import { JsonValidator } from "./Validator";
import { generateSeed } from "./generateSeed";
import { generateSchemes } from "./generateSchemes";
import { generatePalletes } from "./generatePalletes";
import { writeToFile } from "./writeToFile";
import { themeFileName, themeFolderName, tokenFileName } from "./Constants";

const ajv = new Ajv()


const validator = new JsonValidator(ajv)

const themes:RootObject  = validator.validate <RootObject>(schema,theme)



const generateTheme = (theme) => {
    let finalThemeContent = '';
    const seedContent = generateSeed(theme)
    const schemeContent = generateSchemes(theme)
    const palleteContent = generatePalletes(theme)
    finalThemeContent = seedContent+schemeContent+palleteContent
    
    writeToFile(themeFolderName,tokenFileName,finalThemeContent)
 
}

generateTheme(theme)








