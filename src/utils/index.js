export const formateDefectsByCustomer = (obj) => {
  let result = []
  for (let o of obj) {
    o.select = 'value_' + o.id
    result.push(o)
  }
  return result
}
