import { sortByDate, checkValidation } from '@/helpers/utils';
import { mockUnorderedDate,mockOrderedDate } from '@/mocks/CrawlMock'

describe('Utils', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('20 Aug 2020 02:12:00 GMT'));
  });

  it('sortByDate', async () => {
    expect(sortByDate('')).toEqual('');
    expect(sortByDate(null)).toEqual(null);
    expect(sortByDate(undefined)).toEqual(undefined);
    expect(sortByDate({})).toEqual({});
    expect(sortByDate(mockUnorderedDate)).toStrictEqual(mockOrderedDate);
  });

  it('checkValidation', async () => {
    expect(checkValidation('', '', '')).toEqual('');
    expect(checkValidation(null, null, null)).toEqual('');
    expect(checkValidation(undefined,undefined,undefined)).toEqual('');
    expect(checkValidation({},{},{})).toEqual('');
    expect(checkValidation(3, 5, 'test')).toEqual('');
    expect(checkValidation(3, 5, 'te')).toEqual('Error: Input need to be greater than 3');
    expect(checkValidation(3, 5, 'teeeeeeeee')).toEqual('Error: Input need to be less than 5');
  });
});

