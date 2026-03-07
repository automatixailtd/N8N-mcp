// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import N8nMcp from 'n8n-mcp';

const client = new N8nMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.users.list('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.users.list(
        'projectId',
        { cursor: 'cursor', limit: 100 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.users.delete('userId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.projects.users.delete('userId', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.projects.users.add('projectId', {
      relations: [{ role: 'project:viewer', userId: '91765f0d-3b29-45df-adb9-35b23937eb92' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.projects.users.add('projectId', {
      relations: [{ role: 'project:viewer', userId: '91765f0d-3b29-45df-adb9-35b23937eb92' }],
    });
  });

  // Mock server tests are disabled
  test.skip('updateRole: only required params', async () => {
    const responsePromise = client.projects.users.updateRole('userId', {
      projectId: 'projectId',
      role: 'project:viewer',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateRole: required and optional params', async () => {
    const response = await client.projects.users.updateRole('userId', {
      projectId: 'projectId',
      role: 'project:viewer',
    });
  });
});
