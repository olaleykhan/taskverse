import { generateTemporaryId } from './id';

describe('generateTemporaryId', () => {
  let tempId1: string;
  let tempId2: string;

  beforeEach(() => {
    tempId1 = generateTemporaryId();
    tempId2 = generateTemporaryId();
  });

  test('should generate a string', () => {
    expect(typeof tempId1).toBe('string');
  });

  test('should generate a unique ID each time', () => {
    expect(tempId1).not.toBe(tempId2);
  });

  test('should start with "temp-"', () => {
    expect(tempId1.startsWith('temp-')).toBe(true);
  });

  test('should contain a timestamp part', () => {
    const timestampPart = tempId1.split('-')[1];
    expect(Number.isNaN(Number(timestampPart))).toBe(false);
  });

  test('should contain a random part', () => {
    const randomPart = tempId1.split('-')[2];
    expect(randomPart.length).toBeGreaterThan(0);
  });
});