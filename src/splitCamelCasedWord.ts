export const splitCamelCaseWord = (word : string) : string => {
  let newword : string = '';
  word.split(/(?=[A-Z])/).map((s : string) => {
    if(newword==''){
      newword+=s.toLowerCase()
    }
    else{
      newword+='-'+s.toLowerCase()
    }
  });
  return newword
}