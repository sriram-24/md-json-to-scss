export const splitCamelCaseWord = (word) => {
    let newword = '';
    const regex='/(?=[A-Z])/'
    word.split(regex).map((s) => {
      if(newword==''){
        newword+=s.toLowerCase()
      }
      else{
        newword+='-'+s.toLowerCase()
      }
    });
    return newword
  }