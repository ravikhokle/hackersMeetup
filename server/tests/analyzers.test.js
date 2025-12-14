import { analyzeRepository } from '../src/services/analyzers.js';

// Note: these unit tests are light integration checks; in CI, use a mocked HTTP client.
test('analyzeRepository validates input', async () => {
  await expect(analyzeRepository('invalid')).rejects.toThrow(/owner\/name/);
});
