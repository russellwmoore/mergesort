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

  describe('Split', () => {
    let splitResult;

    beforeEach(() => {
      spyOn(window, 'mergeSort').and.callThrough();
      // splitResult = split([1,4,88,6,3,2,0]);
    })

    it('MergeSort to have been called' , () => {
      SplitResult = split([1,4,88,6,3,2,0]);
      expect(window.mergeSort).toHaveBeenCalled();
    });

    it('Expects to be called the correct number of times' , () => {
      SplitResult = split([1,4,88,6,3,2,0]);
      expect(window.mergeSort).toHaveBeenCalledTimes(6);
    });

    it('Expects to be called the correct number of times' , () => {
      SplitResult = split([1,4,88,6,3,2,0,99]);
      expect(window.mergeSort).toHaveBeenCalledTimes(7);
    });

    it('Expects to be called the correct number of times' , () => {
      SplitResult = split([1,2,3,4,5,6,7,8]);
      expect(window.mergeSort).toHaveBeenCalledWith([1],[2]);
      expect(window.mergeSort).toHaveBeenCalledWith([3],[4]);
      expect(window.mergeSort).toHaveBeenCalledWith([5],[6]);
      expect(window.mergeSort).toHaveBeenCalledWith([7],[8]);
      expect(window.mergeSort).toHaveBeenCalledWith([1,2],[3,4]);
      expect(window.mergeSort).toHaveBeenCalledWith([5,6],[7,8]);
      expect(window.mergeSort).toHaveBeenCalledWith([1,2,3,4],[5,6,7,8]);
    });

  });

});
