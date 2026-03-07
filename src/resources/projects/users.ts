// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about projects
 */
export class Users extends APIResource {
  /**
   * Returns a list of all members of a project including their role. Requires
   * user:list scope.
   *
   * @example
   * ```ts
   * const users = await client.projects.users.list('projectId');
   * ```
   */
  list(
    projectID: string,
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get(path`/projects/${projectID}/users`, { query, ...options });
  }

  /**
   * Delete a user from a project on your instance.
   *
   * @example
   * ```ts
   * await client.projects.users.delete('userId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add one or more users to a project on your instance.
   *
   * @example
   * ```ts
   * await client.projects.users.add('projectId', {
   *   relations: [
   *     {
   *       role: 'project:viewer',
   *       userId: '91765f0d-3b29-45df-adb9-35b23937eb92',
   *     },
   *   ],
   * });
   * ```
   */
  add(projectID: string, body: UserAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/users`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Change a user's role in a project.
   *
   * @example
   * ```ts
   * await client.projects.users.updateRole('userId', {
   *   projectId: 'projectId',
   *   role: 'project:viewer',
   * });
   * ```
   */
  updateRole(userID: string, params: UserUpdateRoleParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/users/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserListResponse {
  data?: Array<UserListResponse.Data>;

  /**
   * Paginate through project members by setting the cursor parameter to the
   * nextCursor attribute returned by a previous request. Default value fetches the
   * first page of the collection.
   */
  nextCursor?: string | null;
}

export namespace UserListResponse {
  /**
   * A project member (user with their role in the project).
   */
  export interface Data {
    /**
     * The user's unique identifier.
     */
    id?: string;

    /**
     * When the user was created.
     */
    createdAt?: string;

    /**
     * The user's email address.
     */
    email?: string;

    /**
     * The user's first name.
     */
    firstName?: string;

    /**
     * The user's last name.
     */
    lastName?: string;

    /**
     * The user's role in the project (e.g. project:admin, project:viewer).
     */
    role?: string;

    /**
     * When the user was last updated.
     */
    updatedAt?: string;
  }
}

export interface UserListParams {
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

export interface UserDeleteParams {
  /**
   * The ID of the project.
   */
  projectId: string;
}

export interface UserAddParams {
  /**
   * A list of userIds and roles to add to the project.
   */
  relations: Array<UserAddParams.Relation>;
}

export namespace UserAddParams {
  export interface Relation {
    /**
     * The role assigned to the user in the project.
     */
    role: string;

    /**
     * The unique identifier of the user.
     */
    userId: string;
  }
}

export interface UserUpdateRoleParams {
  /**
   * Path param: The ID of the project.
   */
  projectId: string;

  /**
   * Body param: The role assigned to the user in the project.
   */
  role: string;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserAddParams as UserAddParams,
    type UserUpdateRoleParams as UserUpdateRoleParams,
  };
}
