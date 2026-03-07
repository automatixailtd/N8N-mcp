// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from '../tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about executions
 */
export class Tags extends APIResource {
  /**
   * Update annotation tags of an execution.
   *
   * @example
   * ```ts
   * const tags = await client.executions.tags.update(0, {
   *   body: [{ id: '2tUt1wbLX592XDdX' }],
   * });
   * ```
   */
  update(id: number, params: TagUpdateParams, options?: RequestOptions): APIPromise<TagUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/executions/${id}/tags`, { body: body, ...options });
  }

  /**
   * Get annotation tags for an execution.
   *
   * @example
   * ```ts
   * const tags = await client.executions.tags.list(0);
   * ```
   */
  list(id: number, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get(path`/executions/${id}/tags`, options);
  }
}

export interface TagID {
  id: string;
}

export type TagUpdateResponse = Array<TagsAPI.Tag>;

export type TagListResponse = Array<TagsAPI.Tag>;

export interface TagUpdateParams {
  body: Array<TagID>;
}

export declare namespace Tags {
  export {
    type TagID as TagID,
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagUpdateParams as TagUpdateParams,
  };
}
