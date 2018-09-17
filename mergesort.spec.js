describe('Sort', () => {
  describe('Mergesort', () => {
    let theMerge;
    let empty;
    let actuallyEmpty;
    beforeEach(() => {
      theMerge = mergeSort([2, 4, 6, 8, 80], [5, 7, 10, 18]);
      empty = mergeSort([], [5, 7, 10, 18]);
      actuallyEmpty = mergeSort([], []);
    });

    it('returns an array', () => {
      expect(Array.isArray(theMerge)).toEqual(true);
    });

    it('can process arrays of odd lengths', () => {
      expect(theMerge.length).toEqual(9);
    });

    it('can deal with one empty array and one full array', () => {
      expect(empty).toEqual([5,7,10,18])
    });

    it('can deal with 2 empty arrays', () => {
      expect(actuallyEmpty.length).toEqual(0);
    });

    it('returns the correct array', () => {
      expect(theMerge).toEqual([2, 4, 5, 6, 7, 8, 10, 18, 80]);
    });
  });

});
