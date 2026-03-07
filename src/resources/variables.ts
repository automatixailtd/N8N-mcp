// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProjectsAPI from './projects/projects';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations about variables
 */
export class Variables extends APIResource {
  /**
   * Create a variable in your instance.
   *
   * @example
   * ```ts
   * await client.variables.create({
   *   key: 'key',
   *   value: 'test',
   * });
   * ```
   */
  create(body: VariableCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/variables', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a variable from your instance.
   *
   * @example
   * ```ts
   * await client.variables.update('id', {
   *   key: 'key',
   *   value: 'test',
   * });
   * ```
   */
  update(id: string, body: VariableUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/variables/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve variables from your instance.
   *
   * @example
   * ```ts
   * const variables = await client.variables.list();
   * ```
   */
  list(
    query: VariableListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VariableListResponse> {
    return this._client.get('/variables', { query, ...options });
  }

  /**
   * Delete a variable from your instance.
   *
   * @example
   * ```ts
   * await client.variables.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/variables/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VariableCreate {
  key: string;

  value: string;

  id?: string;

  projectId?: string | null;

  type?: string;
}

export interface VariableListResponse {
  data?: Array<VariableListResponse.Data>;

  /**
   * Paginate through variables by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export namespace VariableListResponse {
  export interface Data {
    key: string;

    value: string;

    id?: string;

    project?: ProjectsAPI.Project;

    type?: string;
  }
}

export interface VariableCreateParams {
  key: string;

  value: string;

  projectId?: string | null;
}

export interface VariableUpdateParams {
  key: string;

  value: string;

  projectId?: string | null;
}

export interface VariableListParams {
  /**
   * Paginate by setting the cursor parameter to the nextCursor attribute returned by
   * the previous request's response. Default value fetches the first "page" of the
   * collection. See pagination for more detail.
   */
  cursor?: string;

  /**
   * The maximum number of items to return.
   */
  limit?: number;

  projectId?: string;

  state?: 'empty';
}

export declare namespace Variables {
  export {
    type VariableCreate as VariableCreate,
    type VariableListResponse as VariableListResponse,
    type VariableCreateParams as VariableCreateParams,
    type VariableUpdateParams as VariableUpdateParams,
    type VariableListParams as VariableListParams,
  };
}
