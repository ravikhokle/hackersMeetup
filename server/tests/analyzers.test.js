// Note: these unit tests are light integration checks; in CI, use a mocked HTTP client.
test('analyzeRepository validates input', async () => {
  const { analyzeRepository } = await import('../src/services/analyzers.js');
  await expect(analyzeRepository('invalid')).rejects.toThrow(/owner\/name/);
});
