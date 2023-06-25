import { existsSync, lstatSync, mkdirSync, readdirSync, rmdirSync, unlinkSync, writeFileSync } from "fs"
import path from "path";

function rimraf(dir_path) {
    if (existsSync(dir_path)) {
        readdirSync(dir_path).forEach(function(entry) {
            var entry_path = path.join(dir_path, entry);
            if (lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                unlinkSync(entry_path);
            }
        });
        rmdirSync(dir_path);
    }
}

export const writeToFile = async(themeFolderName,themeFileName,contents) => {
    if(existsSync(themeFolderName)){
        rimraf(themeFolderName)
    }
    if(!existsSync(themeFolderName)){
        mkdirSync(themeFolderName)
    } 
    writeFileSync(themeFolderName+'/'+themeFileName,contents)   
}