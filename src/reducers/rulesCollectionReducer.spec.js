import rulesCollection from './rulesCollectionReducer'

describe('rulesCollectionReducer', () => {
  describe('general', () => {
    it('should work with, no params', () => {
      expect(rulesCollection({})).toEqual({})
    })
  })

  describe('UPDATE_RULE action', () => {
    it('should work', () => {
      const sample = [{ title: 'foo' }]
      const action = {
        type: 'UPDATE_RULE',
        ruleIndex: 0,
        title: 'hello'
      }
      const expectedResult = [{ title: 'hello' }]

      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })

    it('should not change without title', () => {
      const sample = [{ title: 'foo' }]
      const action = {
        type: 'UPDATE_RULE',
        ruleIndex: 1
      }
      const expectedResult = [{ title: 'foo' }]

      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })

    it('should not change with index out of bound', () => {
      const sample = [{ title: 'foo' }]
      const action = {
        type: 'UPDATE_RULE',
        ruleIndex: 2
      }
      const expectedResult = [{ title: 'foo' }]

      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })
  })

  describe('LINK_SELECTIONS action', () => {
    it('should work', () => {
      const sample = []
      const action = {
        type: 'LINK_SELECTIONS',
        selections: [{ id: '1' }, { id: '2' }]
      }
      const expectedResult = [{ links: [{ id: '1' }, { id: '2' }] }]

      expect(rulesCollection(sample, action)).toEqual([
        { links: action.selections }
      ])
    })

    it('should replace data', () => {
      const sample = [{ links: [{ id: 3 }] }]
      const action = {
        type: 'LINK_SELECTIONS',
        selections: [{ id: '1' }, { id: '2' }]
      }
      const expectedResult = [{ links: [{ id: '1' }, { id: '2' }] }]

      expect(rulesCollection(sample, action)).toEqual([
        { links: action.selections }
      ])
    })

    it('should keep data', () => {
      const sample = [{ another: 1, links: [{ id: 3 }], stuff: 'test' }]

      const action = {
        type: 'LINK_SELECTIONS',
        selections: [{ id: '1' }]
      }
      const expectedResult = [
        {
          another: 1,
          links: [{ id: '1' }],
          stuff: 'test'
        }
      ]
      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })

    it('should replace data (with index)', () => {
      const sample = [{ links: [{ id: 4 }] }, { links: [{ id: 3 }] }]
      const action = {
        type: 'LINK_SELECTIONS',
        selections: [{ id: '1' }, { id: '2' }],
        ruleIndex: 1
      }
      const expectedResult = [
        { links: [{ id: 4 }] },
        {
          links: [{ id: '1' }, { id: '2' }]
        }
      ]

      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })
  })

  describe('CLEAR_ALL_LINKS action', () => {
    it('should work', () => {
      const sample = [
        { links: [1, 2, 3], other: 'test' },
        { links: [null], stuff: 1 }
      ]
      const action = {
        type: 'CLEAR_ALL_LINKS'
      }
      const expectedResult = [
        { links: [], other: 'test' },
        { links: [], stuff: 1 }
      ]

      expect(rulesCollection(sample, action)).toEqual(expectedResult)
    })
  })
})
