// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Operations about security audit
 */
export class Audit extends APIResource {
  /**
   * Generate a security audit for your n8n instance.
   */
  generate(
    body: AuditGenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditGenerateResponse> {
    return this._client.post('/audit', { body, ...options });
  }
}

export interface AuditGenerateResponse {
  'Credentials Risk Report'?: unknown;

  'Database Risk Report'?: unknown;

  'Filesystem Risk Report'?: unknown;

  'Instance Risk Report'?: unknown;

  'Nodes Risk Report'?: unknown;
}

export interface AuditGenerateParams {
  additionalOptions?: AuditGenerateParams.AdditionalOptions;
}

export namespace AuditGenerateParams {
  export interface AdditionalOptions {
    categories?: Array<'credentials' | 'database' | 'nodes' | 'filesystem' | 'instance'>;

    /**
     * Days for a workflow to be considered abandoned if not executed
     */
    daysAbandonedWorkflow?: number;
  }
}

export declare namespace Audit {
  export {
    type AuditGenerateResponse as AuditGenerateResponse,
    type AuditGenerateParams as AuditGenerateParams,
  };
}
