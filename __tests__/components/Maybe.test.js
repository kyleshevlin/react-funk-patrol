import React from 'react'
import TestRenderer from 'react-test-renderer'
import Maybe from '../../src/components/Maybe'

describe('Maybe', () => {
  it('should render nothing by default', () => {
    const node = TestRenderer
      .create(<Maybe>Hello</Maybe>)
      .toJSON()

    expect(node).toEqual(null)
  })

  it('should render nothing, by default, if null is passed', () => {
    const node = TestRenderer
      .create(<Maybe of={null}>Hello</Maybe>)
      .toJSON()

    expect(node).toEqual(null)
  })

  it('should render nothing, by default, if undefined is passed', () => {
    const node = TestRenderer
      .create(<Maybe of={undefined}>Hello</Maybe>)
      .toJSON()

    expect(node).toEqual(null)
  })

  it('should render the nothing prop', () => {
    const Nothing = () => <p>Nothing</p>
    const node = TestRenderer
      .create(<Maybe of={null} nothing={Nothing} />)
      .toJSON()

    expect(node.children[0]).toEqual('Nothing')
  })

  it('should render the something prop if the something is passed', () => {
    const node = TestRenderer
      .create(<Maybe of={false} something={() => 'Something'} />)
      .toJSON()

    expect(node).toEqual('Something')
  })
})