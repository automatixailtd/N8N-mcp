// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { N8nMcp } from '../client';

export abstract class APIResource {
  protected _client: N8nMcp;

  constructor(client: N8nMcp) {
    this._client = client;
  }
}
