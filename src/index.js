import "babel-polyfill"

const isEmpty = (arr=[]) =>
  !arr.length

const head = ([a]) => a
const tail = ([_, ...a]) => a

export const interleave = (a=[], b=[], r=[]) => {
  if (isEmpty(a) && isEmpty(b)) return r
  if (isEmpty(a)) return r
  if (isEmpty(b)) return [...r, head(a)]
  return interleave(tail(a), tail(b), [...r, head(a), head(b)])
}
