// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WorkflowsAPI from './workflows';
import * as TagsAPI from '../tags';
import * as WorkflowsTagsAPI from './tags';
import { TagListResponse, TagUpdateParams, TagUpdateResponse, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about workflows
 */
export class Workflows extends APIResource {
  tags: WorkflowsTagsAPI.Tags = new WorkflowsTagsAPI.Tags(this._client);

  /**
   * Create a workflow in your instance.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.create({
   *   connections: {
   *     Jira: {
   *       main: [
   *         [
   *           {
   *             node: 'Jira',
   *             type: 'main',
   *             index: 0,
   *           },
   *         ],
   *       ],
   *     },
   *   },
   *   name: 'Workflow 1',
   *   nodes: [{}],
   *   settings: {},
   * });
   * ```
   */
  create(body: WorkflowCreateParams, options?: RequestOptions): APIPromise<Workflow> {
    return this._client.post('/workflows', { body, ...options });
  }

  /**
   * Retrieve a workflow.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: WorkflowRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Workflow> {
    return this._client.get(path`/workflows/${id}`, { query, ...options });
  }

  /**
   * Update a workflow. If the workflow is published, the updated version will be
   * automatically re-published.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.update('id', {
   *   connections: {
   *     Jira: {
   *       main: [
   *         [
   *           {
   *             node: 'Jira',
   *             type: 'main',
   *             index: 0,
   *           },
   *         ],
   *       ],
   *     },
   *   },
   *   name: 'Workflow 1',
   *   nodes: [{}],
   *   settings: {},
   * });
   * ```
   */
  update(id: string, body: WorkflowUpdateParams, options?: RequestOptions): APIPromise<Workflow> {
    return this._client.put(path`/workflows/${id}`, { body, ...options });
  }

  /**
   * Retrieve all workflows from your instance.
   *
   * @example
   * ```ts
   * const workflows = await client.workflows.list();
   * ```
   */
  list(
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    return this._client.get('/workflows', { query, ...options });
  }

  /**
   * Delete a workflow.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Workflow> {
    return this._client.delete(path`/workflows/${id}`, options);
  }

  /**
   * Deactivate a workflow.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.deactivate('id');
   * ```
   */
  deactivate(id: string, options?: RequestOptions): APIPromise<Workflow> {
    return this._client.post(path`/workflows/${id}/deactivate`, options);
  }

  /**
   * Publish a workflow. In n8n v1, this action was termed activating a workflow.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.publish('id');
   * ```
   */
  publish(
    id: string,
    body: WorkflowPublishParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Workflow> {
    return this._client.post(path`/workflows/${id}/activate`, { body, ...options });
  }

  /**
   * Retrieves a specific version of a workflow from workflow history.
   *
   * @example
   * ```ts
   * const response = await client.workflows.retrieveVersion(
   *   'abc123-def456-ghi789',
   *   { id: 'id' },
   * );
   * ```
   */
  retrieveVersion(
    versionID: string,
    params: WorkflowRetrieveVersionParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowRetrieveVersionResponse> {
    const { id } = params;
    return this._client.get(path`/workflows/${id}/${versionID}`, options);
  }

  /**
   * Transfer a workflow to another project
   *
   * @example
   * ```ts
   * await client.workflows.transfer('id', {
   *   destinationProjectId: 'destinationProjectId',
   * });
   * ```
   */
  transfer(id: string, body: WorkflowTransferParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/workflows/${id}/transfer`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Node {
  id?: string;

  alwaysOutputData?: boolean;

  /**
   * @deprecated use onError instead
   */
  continueOnFail?: boolean;

  createdAt?: string;

  credentials?: unknown;

  disabled?: boolean;

  executeOnce?: boolean;

  maxTries?: number;

  name?: string;

  notes?: string;

  notesInFlow?: boolean;

  onError?: string;

  parameters?: { [key: string]: unknown };

  position?: Array<number>;

  retryOnFail?: boolean;

  type?: string;

  typeVersion?: number;

  updatedAt?: string;

  waitBetweenTries?: number;

  webhookId?: string;
}

export interface Workflow {
  connections: unknown;

  name: string;

  nodes: Array<Node>;

  settings: Workflow.Settings;

  id?: string;

  active?: boolean;

  activeVersion?: Workflow.ActiveVersion | null;

  createdAt?: string;

  shared?: Array<Workflow.Shared>;

  staticData?: string | null | unknown;

  tags?: Array<TagsAPI.Tag>;

  updatedAt?: string;
}

export namespace Workflow {
  export interface Settings {
    /**
     * Controls whether this workflow is accessible via the Model Context Protocol
     * (MCP).
     *
     * When enabled, this workflow can be called by MCP clients (AI assistants and
     * other tools that support MCP). This allows external AI tools to discover and
     * execute this workflow as part of their capabilities.
     *
     * Requirements for enabling MCP access:
     *
     * - The workflow must be active (not deactivated)
     * - The workflow must contain at least one active Webhook node
     * - Only webhook-triggered workflows can be exposed via MCP
     *
     * Security note: When a workflow is available in MCP, it can be discovered and
     * executed by any MCP client that has the appropriate API credentials for your n8n
     * instance.
     */
    availableInMCP?: boolean;

    /**
     * Comma-separated list of workflow IDs allowed to call this workflow (only used
     * with workflowsFromAList policy)
     */
    callerIds?: string;

    /**
     * Controls which workflows are allowed to call this workflow using the Execute
     * Workflow node.
     *
     * Available options:
     *
     * - `any`: Any workflow can call this workflow (no restrictions)
     * - `none`: No other workflows can call this workflow (completely blocked)
     * - `workflowsFromSameOwner` (default): Only workflows owned by the same project
     *   can call this workflow
     *   - For personal projects: Only workflows created by the same user
     *   - For team projects: Only workflows within the same team project
     * - `workflowsFromAList`: Only specific workflows listed in the `callerIds` field
     *   can call this workflow
     *   - Requires the `callerIds` field to specify which workflow IDs are allowed
     *   - See `callerIds` field documentation for usage
     */
    callerPolicy?: 'any' | 'none' | 'workflowsFromAList' | 'workflowsFromSameOwner';

    /**
     * The ID of the workflow that contains the error trigger node.
     */
    errorWorkflow?: string;

    executionOrder?: string;

    executionTimeout?: number;

    saveDataErrorExecution?: 'all' | 'none';

    saveDataSuccessExecution?: 'all' | 'none';

    saveExecutionProgress?: boolean;

    saveManualExecutions?: boolean;

    /**
     * Estimated time saved per execution in minutes
     */
    timeSavedPerExecution?: number;

    timezone?: string;
  }

  export interface ActiveVersion {
    /**
     * Comma-separated list of author IDs who contributed to this version
     */
    authors?: string;

    connections?: unknown;

    createdAt?: string;

    nodes?: Array<WorkflowsAPI.Node>;

    updatedAt?: string;

    /**
     * Unique identifier for this workflow version
     */
    versionId?: string;

    /**
     * The workflow this version belongs to
     */
    workflowId?: string;
  }

  export interface Shared {
    createdAt?: string;

    project?: Shared.Project;

    projectId?: string;

    role?: string;

    updatedAt?: string;

    workflowId?: string;
  }

  export namespace Shared {
    export interface Project {
      id?: string;

      name?: string;

      type?: string;
    }
  }
}

export interface WorkflowListResponse {
  data?: Array<Workflow>;

  /**
   * Paginate through workflows by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export interface WorkflowRetrieveVersionResponse {
  /**
   * Authors who created this version
   */
  authors: string;

  /**
   * Connections as they were in this version
   */
  connections: unknown;

  /**
   * Nodes as they were in this version
   */
  nodes: Array<Node>;

  /**
   * The version ID of this workflow snapshot
   */
  versionId: string;

  /**
   * The workflow ID this version belongs to
   */
  workflowId: string;

  /**
   * When this version was created
   */
  createdAt?: string;

  /**
   * Workflow description at this version
   */
  description?: string | null;

  /**
   * Workflow name at this version
   */
  name?: string | null;

  /**
   * When this version was last updated
   */
  updatedAt?: string;
}

export interface WorkflowCreateParams {
  connections: unknown;

  name: string;

  nodes: Array<Node>;

  settings: WorkflowCreateParams.Settings;

  shared?: Array<WorkflowCreateParams.Shared>;

  staticData?: string | null | unknown;
}

export namespace WorkflowCreateParams {
  export interface Settings {
    /**
     * Controls whether this workflow is accessible via the Model Context Protocol
     * (MCP).
     *
     * When enabled, this workflow can be called by MCP clients (AI assistants and
     * other tools that support MCP). This allows external AI tools to discover and
     * execute this workflow as part of their capabilities.
     *
     * Requirements for enabling MCP access:
     *
     * - The workflow must be active (not deactivated)
     * - The workflow must contain at least one active Webhook node
     * - Only webhook-triggered workflows can be exposed via MCP
     *
     * Security note: When a workflow is available in MCP, it can be discovered and
     * executed by any MCP client that has the appropriate API credentials for your n8n
     * instance.
     */
    availableInMCP?: boolean;

    /**
     * Comma-separated list of workflow IDs allowed to call this workflow (only used
     * with workflowsFromAList policy)
     */
    callerIds?: string;

    /**
     * Controls which workflows are allowed to call this workflow using the Execute
     * Workflow node.
     *
     * Available options:
     *
     * - `any`: Any workflow can call this workflow (no restrictions)
     * - `none`: No other workflows can call this workflow (completely blocked)
     * - `workflowsFromSameOwner` (default): Only workflows owned by the same project
     *   can call this workflow
     *   - For personal projects: Only workflows created by the same user
     *   - For team projects: Only workflows within the same team project
     * - `workflowsFromAList`: Only specific workflows listed in the `callerIds` field
     *   can call this workflow
     *   - Requires the `callerIds` field to specify which workflow IDs are allowed
     *   - See `callerIds` field documentation for usage
     */
    callerPolicy?: 'any' | 'none' | 'workflowsFromAList' | 'workflowsFromSameOwner';

    /**
     * The ID of the workflow that contains the error trigger node.
     */
    errorWorkflow?: string;

    executionOrder?: string;

    executionTimeout?: number;

    saveDataErrorExecution?: 'all' | 'none';

    saveDataSuccessExecution?: 'all' | 'none';

    saveExecutionProgress?: boolean;

    saveManualExecutions?: boolean;

    /**
     * Estimated time saved per execution in minutes
     */
    timeSavedPerExecution?: number;

    timezone?: string;
  }

  export interface Shared {
    project?: Shared.Project;

    projectId?: string;

    role?: string;

    workflowId?: string;
  }

  export namespace Shared {
    export interface Project {
      name?: string;
    }
  }
}

export interface WorkflowRetrieveParams {
  /**
   * Set this to avoid retrieving pinned data
   */
  excludePinnedData?: boolean;
}

export interface WorkflowUpdateParams {
  connections: unknown;

  name: string;

  nodes: Array<Node>;

  settings: WorkflowUpdateParams.Settings;

  shared?: Array<WorkflowUpdateParams.Shared>;

  staticData?: string | null | unknown;
}

export namespace WorkflowUpdateParams {
  export interface Settings {
    /**
     * Controls whether this workflow is accessible via the Model Context Protocol
     * (MCP).
     *
     * When enabled, this workflow can be called by MCP clients (AI assistants and
     * other tools that support MCP). This allows external AI tools to discover and
     * execute this workflow as part of their capabilities.
     *
     * Requirements for enabling MCP access:
     *
     * - The workflow must be active (not deactivated)
     * - The workflow must contain at least one active Webhook node
     * - Only webhook-triggered workflows can be exposed via MCP
     *
     * Security note: When a workflow is available in MCP, it can be discovered and
     * executed by any MCP client that has the appropriate API credentials for your n8n
     * instance.
     */
    availableInMCP?: boolean;

    /**
     * Comma-separated list of workflow IDs allowed to call this workflow (only used
     * with workflowsFromAList policy)
     */
    callerIds?: string;

    /**
     * Controls which workflows are allowed to call this workflow using the Execute
     * Workflow node.
     *
     * Available options:
     *
     * - `any`: Any workflow can call this workflow (no restrictions)
     * - `none`: No other workflows can call this workflow (completely blocked)
     * - `workflowsFromSameOwner` (default): Only workflows owned by the same project
     *   can call this workflow
     *   - For personal projects: Only workflows created by the same user
     *   - For team projects: Only workflows within the same team project
     * - `workflowsFromAList`: Only specific workflows listed in the `callerIds` field
     *   can call this workflow
     *   - Requires the `callerIds` field to specify which workflow IDs are allowed
     *   - See `callerIds` field documentation for usage
     */
    callerPolicy?: 'any' | 'none' | 'workflowsFromAList' | 'workflowsFromSameOwner';

    /**
     * The ID of the workflow that contains the error trigger node.
     */
    errorWorkflow?: string;

    executionOrder?: string;

    executionTimeout?: number;

    saveDataErrorExecution?: 'all' | 'none';

    saveDataSuccessExecution?: 'all' | 'none';

    saveExecutionProgress?: boolean;

    saveManualExecutions?: boolean;

    /**
     * Estimated time saved per execution in minutes
     */
    timeSavedPerExecution?: number;

    timezone?: string;
  }

  export interface Shared {
    project?: Shared.Project;

    projectId?: string;

    role?: string;

    workflowId?: string;
  }

  export namespace Shared {
    export interface Project {
      name?: string;
    }
  }
}

export interface WorkflowListParams {
  active?: boolean;

  /**
   * Paginate by setting the cursor parameter to the nextCursor attribute returned by
   * the previous request's response. Default value fetches the first "page" of the
   * collection. See pagination for more detail.
   */
  cursor?: string;

  /**
   * Set this to avoid retrieving pinned data
   */
  excludePinnedData?: boolean;

  /**
   * The maximum number of items to return.
   */
  limit?: number;

  name?: string;

  projectId?: string;

  tags?: string;
}

export interface WorkflowPublishParams {
  /**
   * Optional description for the workflow version during activation.
   */
  description?: string;

  /**
   * Optional name for the workflow version during activation.
   */
  name?: string;

  /**
   * The specific version ID to activate or publish. If not provided, the latest
   * version is used.
   */
  versionId?: string;
}

export interface WorkflowRetrieveVersionParams {
  /**
   * The ID of the workflow.
   */
  id: string;
}

export interface WorkflowTransferParams {
  /**
   * The ID of the project to transfer the workflow to.
   */
  destinationProjectId: string;
}

Workflows.Tags = Tags;

export declare namespace Workflows {
  export {
    type Node as Node,
    type Workflow as Workflow,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowRetrieveVersionResponse as WorkflowRetrieveVersionResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowPublishParams as WorkflowPublishParams,
    type WorkflowRetrieveVersionParams as WorkflowRetrieveVersionParams,
    type WorkflowTransferParams as WorkflowTransferParams,
  };

  export {
    Tags as Tags,
    type TagUpdateResponse as TagUpdateResponse,
    type TagListResponse as TagListResponse,
    type TagUpdateParams as TagUpdateParams,
  };
}
