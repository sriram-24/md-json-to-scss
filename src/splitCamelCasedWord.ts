export const splitCamelCaseWord = (word : string) : string => {
    let newword : string = '';
    const regex : string='/(?=[A-Z])/'
    word.split(regex).map((s : string) => {
      if(newword==''){
        newword+=s.toLowerCase()
      }
      else{
        newword+='-'+s.toLowerCase()
      }
    });
    return newword
  }