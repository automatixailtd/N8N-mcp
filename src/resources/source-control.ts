// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Operations about source control
 */
export class SourceControl extends APIResource {
  /**
   * Requires the Source Control feature to be licensed and connected to a
   * repository.
   *
   * @example
   * ```ts
   * const response = await client.sourceControl.pullChanges();
   * ```
   */
  pullChanges(
    body: SourceControlPullChangesParams,
    options?: RequestOptions,
  ): APIPromise<SourceControlPullChangesResponse> {
    return this._client.post('/source-control/pull', { body, ...options });
  }
}

export interface SourceControlPullChangesResponse {
  credentials?: Array<SourceControlPullChangesResponse.Credential>;

  tags?: SourceControlPullChangesResponse.Tags;

  variables?: SourceControlPullChangesResponse.Variables;

  workflows?: Array<SourceControlPullChangesResponse.Workflow>;

  [k: string]: unknown;
}

export namespace SourceControlPullChangesResponse {
  export interface Credential {
    id?: string;

    name?: string;

    type?: string;
  }

  export interface Tags {
    mappings?: Array<Tags.Mapping>;

    tags?: Array<Tags.Tag>;
  }

  export namespace Tags {
    export interface Mapping {
      tagId?: string;

      workflowId?: string;
    }

    export interface Tag {
      id?: string;

      name?: string;
    }
  }

  export interface Variables {
    added?: Array<string>;

    changed?: Array<string>;
  }

  export interface Workflow {
    id?: string;

    name?: string;
  }
}

export interface SourceControlPullChangesParams {
  /**
   * Controls automatic workflow publishing after import:
   *
   * - `none`: Keep workflows in their local published state (default)
   * - `all`: Publish all imported workflows
   * - `published`: Publish only workflows that were published locally before import
   */
  autoPublish?: 'none' | 'all' | 'published';

  force?: boolean;

  variables?: unknown;
}

export declare namespace SourceControl {
  export {
    type SourceControlPullChangesResponse as SourceControlPullChangesResponse,
    type SourceControlPullChangesParams as SourceControlPullChangesParams,
  };
}
