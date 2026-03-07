// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import {
  UserAddParams,
  UserDeleteParams,
  UserListParams,
  UserListResponse,
  UserUpdateRoleParams,
  Users,
} from './users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about projects
 */
export class Projects extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create a project on your instance.
   *
   * @example
   * ```ts
   * await client.projects.create({ name: 'name' });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/projects', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a project on your instance.
   *
   * @example
   * ```ts
   * await client.projects.update('projectId', { name: 'name' });
   * ```
   */
  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/projects/${projectID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve projects from your instance.
   *
   * @example
   * ```ts
   * const projects = await client.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', { query, ...options });
  }

  /**
   * Delete a project from your instance.
   *
   * @example
   * ```ts
   * await client.projects.delete('projectId');
   * ```
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Project {
  name: string;

  id?: string;

  type?: string;
}

export interface ProjectListResponse {
  data?: Array<Project>;

  /**
   * Paginate through projects by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export interface ProjectCreateParams {
  name: string;
}

export interface ProjectUpdateParams {
  name: string;
}

export interface ProjectListParams {
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

Projects.Users = Users;

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserAddParams as UserAddParams,
    type UserUpdateRoleParams as UserUpdateRoleParams,
  };
}
