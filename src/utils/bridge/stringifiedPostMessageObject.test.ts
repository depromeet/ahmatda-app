import stringifiedPostMessageObject from './stringifiedPostMessageObject';

describe('stringifiedPostMessageObject', () => {
  const testObject: Parameters<typeof stringifiedPostMessageObject>[0] = { type: 'APP_VERSION', data: 'test' };

  it('stringified 된 object를 반환해야 한다', () => {
    const correctResult = JSON.stringify(testObject);
    const result = stringifiedPostMessageObject(testObject);

    expect(result).toBe(correctResult);
  });
});
