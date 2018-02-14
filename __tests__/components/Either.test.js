import React from 'react'
import TestRenderer from 'react-test-renderer'
import Either from '../../src/components/Either'

const left = () => 'Left'
const right = () => 'Right'

describe('Either', () => {
  it('should render nothing by default', () => {
    const node = TestRenderer.create(<Either />).toJSON()

    expect(node).toEqual(null)
  })

  it('should render `left` if `of` is falsy', () => {
    const node = TestRenderer.create(
      <Either of={0} left={left} right={right} />
    ).toJSON()

    expect(node).toEqual('Left')
  })

  it('should render `right` if `of` is truthy', () => {
    const node = TestRenderer.create(
      <Either of={1} left={left} right={right} />
    ).toJSON()

    expect(node).toEqual('Right')
  })
})
