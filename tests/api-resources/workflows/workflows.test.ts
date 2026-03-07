// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import N8nMcp from 'n8n-mcp';

const client = new N8nMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workflows.create({
      connections: {
        Jira: {
          main: [
            [
              {
                node: 'Jira',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
      name: 'Workflow 1',
      nodes: [{}],
      settings: {},
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
  test.skip('create: required and optional params', async () => {
    const response = await client.workflows.create({
      connections: {
        Jira: {
          main: [
            [
              {
                node: 'Jira',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
      name: 'Workflow 1',
      nodes: [
        {
          id: '0f5532f9-36ba-4bef-86c7-30d607400b15',
          alwaysOutputData: false,
          continueOnFail: false,
          credentials: { jiraSoftwareCloudApi: { id: '35', name: 'jiraApi' } },
          disabled: true,
          executeOnce: false,
          maxTries: 0,
          name: 'Jira',
          notes: 'notes',
          notesInFlow: true,
          onError: 'stopWorkflow',
          parameters: { additionalProperties: 'bar' },
          position: [-100, 80],
          retryOnFail: false,
          type: 'n8n-nodes-base.jira',
          typeVersion: 1,
          waitBetweenTries: 0,
          webhookId: 'webhookId',
        },
      ],
      settings: {
        availableInMCP: false,
        callerIds: '14, 18, 23',
        callerPolicy: 'workflowsFromSameOwner',
        errorWorkflow: 'VzqKEW0ShTXA5vPj',
        executionOrder: 'v1',
        executionTimeout: 3600,
        saveDataErrorExecution: 'all',
        saveDataSuccessExecution: 'all',
        saveExecutionProgress: true,
        saveManualExecutions: true,
        timeSavedPerExecution: 0,
        timezone: 'America/New_York',
      },
      shared: [
        {
          project: { name: 'name' },
          projectId: '2tUt1wbLX592XDdX',
          role: 'workflow:owner',
          workflowId: '2tUt1wbLX592XDdX',
        },
      ],
      staticData: { lastId: 1 },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.retrieve('id', { excludePinnedData: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.workflows.update('id', {
      connections: {
        Jira: {
          main: [
            [
              {
                node: 'Jira',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
      name: 'Workflow 1',
      nodes: [{}],
      settings: {},
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
  test.skip('update: required and optional params', async () => {
    const response = await client.workflows.update('id', {
      connections: {
        Jira: {
          main: [
            [
              {
                node: 'Jira',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
      name: 'Workflow 1',
      nodes: [
        {
          id: '0f5532f9-36ba-4bef-86c7-30d607400b15',
          alwaysOutputData: false,
          continueOnFail: false,
          credentials: { jiraSoftwareCloudApi: { id: '35', name: 'jiraApi' } },
          disabled: true,
          executeOnce: false,
          maxTries: 0,
          name: 'Jira',
          notes: 'notes',
          notesInFlow: true,
          onError: 'stopWorkflow',
          parameters: { additionalProperties: 'bar' },
          position: [-100, 80],
          retryOnFail: false,
          type: 'n8n-nodes-base.jira',
          typeVersion: 1,
          waitBetweenTries: 0,
          webhookId: 'webhookId',
        },
      ],
      settings: {
        availableInMCP: false,
        callerIds: '14, 18, 23',
        callerPolicy: 'workflowsFromSameOwner',
        errorWorkflow: 'VzqKEW0ShTXA5vPj',
        executionOrder: 'v1',
        executionTimeout: 3600,
        saveDataErrorExecution: 'all',
        saveDataSuccessExecution: 'all',
        saveExecutionProgress: true,
        saveManualExecutions: true,
        timeSavedPerExecution: 0,
        timezone: 'America/New_York',
      },
      shared: [
        {
          project: { name: 'name' },
          projectId: '2tUt1wbLX592XDdX',
          role: 'workflow:owner',
          workflowId: '2tUt1wbLX592XDdX',
        },
      ],
      staticData: { lastId: 1 },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workflows.list();
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
      client.workflows.list(
        {
          active: true,
          cursor: 'cursor',
          excludePinnedData: true,
          limit: 100,
          name: 'My Workflow',
          projectId: 'VmwOO9HeTEj20kxM',
          tags: 'test,production',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.workflows.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deactivate', async () => {
    const responsePromise = client.workflows.deactivate('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish', async () => {
    const responsePromise = client.workflows.publish('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.publish(
        'id',
        {
          description: 'description',
          name: 'name',
          versionId: 'versionId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveVersion: only required params', async () => {
    const responsePromise = client.workflows.retrieveVersion('abc123-def456-ghi789', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveVersion: required and optional params', async () => {
    const response = await client.workflows.retrieveVersion('abc123-def456-ghi789', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('transfer: only required params', async () => {
    const responsePromise = client.workflows.transfer('id', { destinationProjectId: 'destinationProjectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('transfer: required and optional params', async () => {
    const response = await client.workflows.transfer('id', { destinationProjectId: 'destinationProjectId' });
  });
});
