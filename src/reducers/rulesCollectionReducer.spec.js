import rulesCollection from './rulesCollectionReducer'

describe('rulesCollectionReducer', () => {
  describe('general', () => {
    it('should work with, no params', () => {
      expect(rulesCollection({})).toEqual({})
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
})
