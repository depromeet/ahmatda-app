import stringifiedPostMessageObject from './stringifiedPostMessageObject';

describe('stringifiedPostMessageObject', () => {
  const testObject: Parameters<typeof stringifiedPostMessageObject>[0] = { type: 'foo', data: 'test' };

  it('stringified 된 object를 반환해야 한다', () => {
    const correctResult = JSON.stringify(testObject);
    const result = stringifiedPostMessageObject(testObject);

    expect(result).toBe(correctResult);
  });
});
