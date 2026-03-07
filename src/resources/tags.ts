// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations about tags
 */
export class Tags extends APIResource {
  /**
   * Create a tag in your instance.
   *
   * @example
   * ```ts
   * const tag = await client.tags.create({
   *   name: 'Production',
   * });
   * ```
   */
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/tags', { body, ...options });
  }

  /**
   * Retrieves a tag.
   *
   * @example
   * ```ts
   * const tag = await client.tags.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.get(path`/tags/${id}`, options);
  }

  /**
   * Update a tag.
   *
   * @example
   * ```ts
   * const tag = await client.tags.update('id', {
   *   name: 'Production',
   * });
   * ```
   */
  update(id: string, body: TagUpdateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.put(path`/tags/${id}`, { body, ...options });
  }

  /**
   * Retrieve all tags from your instance.
   *
   * @example
   * ```ts
   * const tags = await client.tags.list();
   * ```
   */
  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/tags', { query, ...options });
  }

  /**
   * Deletes a tag.
   *
   * @example
   * ```ts
   * const tag = await client.tags.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.delete(path`/tags/${id}`, options);
  }
}

export interface Tag {
  name: string;

  id?: string;

  createdAt?: string;

  updatedAt?: string;
}

export interface TagListResponse {
  data?: Array<Tag>;

  /**
   * Paginate through tags by setting the cursor parameter to a nextCursor attribute
   * returned by a previous request. Default value fetches the first "page" of the
   * collection.
   */
  nextCursor?: string | null;
}

export interface TagCreateParams {
  name: string;
}

export interface TagUpdateParams {
  name: string;
}

export interface TagListParams {
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
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
  };
}
