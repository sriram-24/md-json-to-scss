import Ajv from "ajv"
import {RootObject} from './schema/Schema'
import schema from './schema/schema.json';
import theme from './theme.json';
import { JsonValidator } from "./Validator";
const ajv = new Ajv()


const validator = new JsonValidator(ajv)

const themes:RootObject  = validator.validate <RootObject>(schema,theme)

console.log(themes);








