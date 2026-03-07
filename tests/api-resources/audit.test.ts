// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import N8nMcp from 'n8n-mcp';

const client = new N8nMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audit', () => {
  // Mock server tests are disabled
  test.skip('generate', async () => {
    const responsePromise = client.audit.generate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.audit.generate(
        { additionalOptions: { categories: ['credentials'], daysAbandonedWorkflow: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });
});
