// @ts-nocheck

export function sortByDate(arr){
  return arr.sort((a,b) => new Date(b.date) - new Date(a.date));
}