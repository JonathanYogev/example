const nock = require('nock');
const { fetchData, apiUrl } = require('../index');

describe('Client API Fetch', () => {
  it('should fetch data successfully from the API server', async () => {
    // Mock the API server response
    const mockData = { message: 'mock hello' };
    nock(apiUrl)
      .get('/api/data')
      .reply(200, mockData);

    const data = await fetchData();

    // Assert that the fetched data matches the mock data
    expect(data).toEqual(mockData);
  });

  it('should handle errors gracefully', async () => {
    // Mock the API server to return an error
    nock(apiUrl)
      .get('/api/data')
      .reply(500);

    const data = await fetchData();

    // Assert that the function returns null on error
    expect(data).toBeNull();
  });
});
