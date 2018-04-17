import contractViewReducer from './contractViewReducer'

describe('rulesCollectionReducer', () => {
  describe('general', () => {
    it('should work with, no params', () => {
      expect(contractViewReducer({})).toEqual({})
    })
  })

  describe('SET_SELECTIONS action', () => {
    it('should work', () => {
      const sample = { selections: [{ id: '1' }, { id: '2' }] }
      const action = { type: 'SET_SELECTIONS', selections: [{ id: '1' }] }
      const expectedResult = { selections: [{ id: '1' }] }

      expect(contractViewReducer(sample, action)).toEqual(expectedResult)
    })

    it('should replace existing data', () => {
      const sample = { selections: [{ id: '1' }, { id: '2' }] }
      const action = { type: 'SET_SELECTIONS', selections: [{ id: 'test' }] }
      const expectedResult = { selections: [{ id: 'test' }] }

      expect(contractViewReducer(sample, action)).toEqual(expectedResult)
    })
  })

  describe('RESET_SELECTIONS action', () => {
    it('should work', () => {
      const sample = { selections: [{ id: '1' }, { id: '2' }] }
      const action = { type: 'RESET_SELECTIONS' }
      const expectedResult = { selections: [] }

      expect(contractViewReducer(sample, action)).toEqual(expectedResult)
    })
  })
})
