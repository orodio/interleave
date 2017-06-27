import { interleave } from './index'

const s = arr => `[${arr.join(',')}]`

const snap = (a, b) => {
  // const r = interleave(a,b)
  it(`interleave(${s(a)},${s(b)})`, () => {
    expect(interleave(a,b)).toMatchSnapshot()
  })
}

describe('interleave', () => {
  snap([],          [])
  snap([1],         [])
  snap([],          [1])
  snap([1],         [2])
  snap([1,2],       [3])
  snap([1,2],       [3,4])
  snap([1,2,3,4,5], ["a", "b", "c", "d"])
  snap([1,2,3,4,5], ["a", "b", "c", "d", "e"])
  snap([1,2,3,4,5], ["a", "b", "c", "d", "e", "f"])
})
