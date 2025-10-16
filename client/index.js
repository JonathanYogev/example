const axios = require('axios');

// The URL for the server's API. This is the key part for Kubernetes service discovery.
// We will set this environment variable in our Kubernetes manifest.
const apiUrl = process.env.API_SERVER_URL || 'http://localhost:3001';

async function fetchData() {
  try {
    console.log(`Fetching data from ${apiUrl}/api/data...`);
    const response = await axios.get(`${apiUrl}/api/data`);
    console.log('Data from server:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

// Function to run the data fetching continuously
async function runClient() {
  while (true) {
    await fetchData();
    // Wait for 5 seconds before fetching again
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

// If this file is run directly, call the runClient function
if (require.main === module) {
  runClient();
}

module.exports = { fetchData, apiUrl };