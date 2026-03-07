// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import N8nMcp from 'n8n-mcp';

const client = new N8nMcp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rows', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dataTables.rows.update('dataTableId', {
      data: { status: 'bar', updatedBy: 'bar' },
      filter: {
        filters: [
          {
            columnName: 'status',
            condition: 'eq',
            value: 'pending',
          },
        ],
      },
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
    const response = await client.dataTables.rows.update('dataTableId', {
      data: { status: 'bar', updatedBy: 'bar' },
      filter: {
        filters: [
          {
            columnName: 'status',
            condition: 'eq',
            value: 'pending',
          },
        ],
        type: 'and',
      },
      dryRun: false,
      returnData: false,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dataTables.rows.list('dataTableId');
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
      client.dataTables.rows.list(
        'dataTableId',
        {
          cursor: 'cursor',
          filter: 'filter',
          limit: 100,
          search: 'search',
          sortBy: 'sortBy',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(N8nMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.dataTables.rows.delete('dataTableId', { filter: 'filter' });
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
    const response = await client.dataTables.rows.delete('dataTableId', {
      filter: 'filter',
      dryRun: true,
      returnData: true,
    });
  });

  // Mock server tests are disabled
  test.skip('insert: only required params', async () => {
    const responsePromise = client.dataTables.rows.insert('dataTableId', {
      data: [
        {
          name: 'bar',
          email: 'bar',
          age: 'bar',
        },
        {
          name: 'bar',
          email: 'bar',
          age: 'bar',
        },
      ],
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
  test.skip('insert: required and optional params', async () => {
    const response = await client.dataTables.rows.insert('dataTableId', {
      data: [
        {
          name: 'bar',
          email: 'bar',
          age: 'bar',
        },
        {
          name: 'bar',
          email: 'bar',
          age: 'bar',
        },
      ],
      returnType: 'all',
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.dataTables.rows.upsert('dataTableId', {
      data: {
        email: 'bar',
        name: 'bar',
        status: 'bar',
      },
      filter: {
        filters: [
          {
            columnName: 'email',
            condition: 'eq',
            value: 'user@example.com',
          },
        ],
      },
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.dataTables.rows.upsert('dataTableId', {
      data: {
        email: 'bar',
        name: 'bar',
        status: 'bar',
      },
      filter: {
        filters: [
          {
            columnName: 'email',
            condition: 'eq',
            value: 'user@example.com',
          },
        ],
        type: 'and',
      },
      dryRun: false,
      returnData: true,
    });
  });
});
