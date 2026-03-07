// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from '../tags';
import * as ExecutionsTagsAPI from '../executions/tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about workflows
 */
export class Tags extends APIResource {
  /**
   * Update tags of a workflow.
   *
   * @example
   * ```ts
   * const tags = await client.workflows.tags.update('id', {
   *   body: [{ id: '2tUt1wbLX592XDdX' }],
   * });
   * ```
   */
  update(id: string, params: TagUpdateParams, options?: RequestOptions): APIPromise<TagUpdateResponse> {
    const { body } = params;
    return this._client.put(path`/workflows/${id}/tags`, { body: body, ...options });
  }

  /**
   * Get workflow tags.
   *
   * @example
   * ```ts
   * const tags = await client.workflows.tags.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get(path`/workflows/${id}/tags`, options);
  }
}

export type TagUpdateResponse = Array<TagsAPI.Tag>;

export type TagListResponse = Array<TagsAPI.Tag>;

export interface TagUpdateParams {
  body: Array<ExecutionsTagsAPI.TagID>;
}

export declare namespace Tags {
  export {
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagUpdateParams as TagUpdateParams,
  };
}
