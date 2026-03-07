// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations about users
 */
export class Users extends APIResource {
  /**
   * Create one or more users.
   *
   * @example
   * ```ts
   * const user = await client.users.create({
   *   body: [{ email: 'dev@stainless.com' }],
   * });
   * ```
   */
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    const { body } = params;
    return this._client.post('/users', { body: body, ...options });
  }

  /**
   * Retrieve a user from your instance. Only available for the instance owner.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<User> {
    return this._client.get(path`/users/${id}`, { query, ...options });
  }

  /**
   * Retrieve all users from your instance. Only available for the instance owner.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Delete a user from your instance.
   *
   * @example
   * ```ts
   * await client.users.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Change a user's global role
   *
   * @example
   * ```ts
   * await client.users.updateRole('id', {
   *   newRoleName: 'global:member',
   * });
   * ```
   */
  updateRole(id: string, body: UserUpdateRoleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/users/${id}/role`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface User {
  email: string;

  id?: string;

  /**
   * Time the user was created.
   */
  createdAt?: string;

  /**
   * User's first name
   */
  firstName?: string;

  /**
   * Whether the user finished setting up their account in response to the invitation
   * (true) or not (false).
   */
  isPending?: boolean;

  /**
   * User's last name
   */
  lastName?: string;

  role?: string;

  /**
   * Last time the user was updated.
   */
  updatedAt?: string;
}

export interface UserCreateResponse {
  error?: string;

  user?: UserCreateResponse.User;
}

export namespace UserCreateResponse {
  export interface User {
    id?: string;

    email?: string;

    emailSent?: boolean;

    inviteAcceptUrl?: string;
  }
}

export interface UserListResponse {
  data?: Array<User>;

  /**
   * Paginate through users by setting the cursor parameter to a nextCursor attribute
   * returned by a previous request. Default value fetches the first "page" of the
   * collection.
   */
  nextCursor?: string | null;
}

export interface UserCreateParams {
  body: Array<UserCreateParams.Body>;
}

export namespace UserCreateParams {
  export interface Body {
    email: string;

    role?: string;
  }
}

export interface UserRetrieveParams {
  /**
   * Whether to include the user's role or not.
   */
  includeRole?: boolean;
}

export interface UserListParams {
  /**
   * Paginate by setting the cursor parameter to the nextCursor attribute returned by
   * the previous request's response. Default value fetches the first "page" of the
   * collection. See pagination for more detail.
   */
  cursor?: string;

  /**
   * Whether to include the user's role or not.
   */
  includeRole?: boolean;

  /**
   * The maximum number of items to return.
   */
  limit?: number;

  projectId?: string;
}

export interface UserUpdateRoleParams {
  newRoleName: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserListParams as UserListParams,
    type UserUpdateRoleParams as UserUpdateRoleParams,
  };
}
