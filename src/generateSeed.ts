import { RootObject } from "./schema/Schema";

export  const generateSeed = (theme : RootObject) : string => {
    let testContent = '';
    testContent = `$md-source:${theme.seed};`
    return testContent
  }