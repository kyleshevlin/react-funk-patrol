import { isNothing } from '../../src/utils'

describe('isNothing', () => {
  it('responds correctly to null and undefined', () => {
    expect(isNothing(null)).toEqual(true)
    expect(isNothing(undefined)).toEqual(true)
    expect(isNothing('hi')).toEqual(false)
  })
})
