// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StopAPI from './stop';
import { Stop, StopMultipleParams, StopMultipleResponse } from './stop';
import * as TagsAPI from './tags';
import { TagID, TagListResponse, TagUpdateParams, TagUpdateResponse, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about executions
 */
export class Executions extends APIResource {
  stop: StopAPI.Stop = new StopAPI.Stop(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Retrieve an execution from your instance.
   *
   * @example
   * ```ts
   * const execution = await client.executions.retrieve(0);
   * ```
   */
  retrieve(
    id: number,
    query: ExecutionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Execution> {
    return this._client.get(path`/executions/${id}`, { query, ...options });
  }

  /**
   * Retrieve all executions from your instance.
   *
   * @example
   * ```ts
   * const executions = await client.executions.list();
   * ```
   */
  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    return this._client.get('/executions', { query, ...options });
  }

  /**
   * Deletes an execution from your instance.
   *
   * @example
   * ```ts
   * const execution = await client.executions.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<Execution> {
    return this._client.delete(path`/executions/${id}`, options);
  }

  /**
   * Retry an execution from your instance.
   *
   * @example
   * ```ts
   * const execution = await client.executions.retry(0);
   * ```
   */
  retry(
    id: number,
    body: ExecutionRetryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Execution> {
    return this._client.post(path`/executions/${id}/retry`, { body, ...options });
  }
}

export interface Execution {
  id?: number;

  customData?: unknown;

  data?: unknown;

  finished?: boolean;

  mode?:
    | 'cli'
    | 'error'
    | 'integrated'
    | 'internal'
    | 'manual'
    | 'retry'
    | 'trigger'
    | 'webhook'
    | 'evaluation'
    | 'chat';

  retryOf?: number | null;

  retrySuccessId?: number | null;

  startedAt?: string;

  status?: 'canceled' | 'crashed' | 'error' | 'new' | 'running' | 'success' | 'unknown' | 'waiting';

  /**
   * The time at which the execution stopped. Will only be null for executions that
   * still have the status 'running'.
   */
  stoppedAt?: string | null;

  waitTill?: string | null;

  workflowId?: number;
}

export interface ExecutionListResponse {
  data?: Array<Execution>;

  /**
   * Paginate through executions by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export interface ExecutionRetrieveParams {
  /**
   * Whether or not to include the execution's detailed data.
   */
  includeData?: boolean;
}

export interface ExecutionListParams {
  /**
   * Paginate by setting the cursor parameter to the nextCursor attribute returned by
   * the previous request's response. Default value fetches the first "page" of the
   * collection. See pagination for more detail.
   */
  cursor?: string;

  /**
   * Whether or not to include the execution's detailed data.
   */
  includeData?: boolean;

  /**
   * The maximum number of items to return.
   */
  limit?: number;

  projectId?: string;

  /**
   * Status to filter the executions by.
   */
  status?: 'canceled' | 'error' | 'running' | 'success' | 'waiting';

  /**
   * Workflow to filter the executions by.
   */
  workflowId?: string;
}

export interface ExecutionRetryParams {
  /**
   * Whether to load the currently saved workflow to execute instead of the one saved
   * at the time of the execution. If set to true, it will retry with the latest
   * version of the workflow.
   */
  loadWorkflow?: boolean;
}

Executions.Stop = Stop;
Executions.Tags = Tags;

export declare namespace Executions {
  export {
    type Execution as Execution,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionRetryParams as ExecutionRetryParams,
  };

  export {
    Stop as Stop,
    type StopMultipleResponse as StopMultipleResponse,
    type StopMultipleParams as StopMultipleParams,
  };

  export {
    Tags as Tags,
    type TagID as TagID,
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagUpdateParams as TagUpdateParams,
  };
}
