// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import N8nMcp from 'n8n-mcp';

const client = new N8nMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stop', () => {
  // Mock server tests are disabled
  test.skip('multiple: only required params', async () => {
    const responsePromise = client.executions.stop.multiple({ status: ['queued', 'running', 'waiting'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('multiple: required and optional params', async () => {
    const response = await client.executions.stop.multiple({
      status: ['queued', 'running', 'waiting'],
      startedAfter: '2024-01-01T00:00:00.000Z',
      startedBefore: '2024-12-31T23:59:59.999Z',
      workflowId: '2tUt1wbLX592XDdX',
    });
  });

  // Mock server tests are disabled
  test.skip('single', async () => {
    const responsePromise = client.executions.stop.single(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
