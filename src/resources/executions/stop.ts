// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecutionsAPI from './executions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about executions
 */
export class Stop extends APIResource {
  /**
   * Stop multiple executions from your instance based on filter criteria.
   *
   * @example
   * ```ts
   * const response = await client.executions.stop.multiple({
   *   status: ['queued', 'running', 'waiting'],
   * });
   * ```
   */
  multiple(body: StopMultipleParams, options?: RequestOptions): APIPromise<StopMultipleResponse> {
    return this._client.post('/executions/stop', { body, ...options });
  }

  /**
   * Stop an execution by id.
   *
   * @example
   * ```ts
   * const execution = await client.executions.stop.single(0);
   * ```
   */
  single(id: number, options?: RequestOptions): APIPromise<ExecutionsAPI.Execution> {
    return this._client.post(path`/executions/${id}/stop`, options);
  }
}

export interface StopMultipleResponse {
  /**
   * The number of executions that were successfully stopped.
   */
  stopped?: number;
}

export interface StopMultipleParams {
  /**
   * Array of execution statuses to stop. Must include at least one status.
   */
  status: Array<'queued' | 'running' | 'waiting'>;

  /**
   * Only stop executions that started after this time.
   */
  startedAfter?: string;

  /**
   * Only stop executions that started before this time.
   */
  startedBefore?: string;

  /**
   * Optional workflow ID to filter executions. If not provided, will stop executions
   * across all accessible workflows.
   */
  workflowId?: string;
}

export declare namespace Stop {
  export { type StopMultipleResponse as StopMultipleResponse, type StopMultipleParams as StopMultipleParams };
}
