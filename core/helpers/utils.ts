// @ts-nocheck

export function sortByDate(arr){
  return arr.sort((a,b) => new Date(b.date) - new Date(a.date));
}

export function checkValidation(min:number, max:number, text:string): string{
  const number = text.length;

  if(number < min){
    return `Error: Input need to be greater than ${min}`
  }
  if(number > max){
    return `Error: Input need to be less than ${max}`
  }
  return ''
}