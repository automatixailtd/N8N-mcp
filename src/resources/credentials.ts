// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CredentialsAPI from './credentials';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations about credentials
 */
export class Credentials extends APIResource {
  /**
   * Creates a credential that can be used by nodes of the specified type.
   *
   * @example
   * ```ts
   * const createCredentialResponse =
   *   await client.credentials.create({
   *     data: {
   *       accessToken:
   *         'ada612vad6fa5df4adf5a5dsf4389adsf76da7s',
   *     },
   *     name: "Joe's Github Credentials",
   *     type: 'githubApi',
   *   });
   * ```
   */
  create(body: CredentialCreateParams, options?: RequestOptions): APIPromise<CreateCredentialResponse> {
    return this._client.post('/credentials', { body, ...options });
  }

  /**
   * Updates an existing credential. You must be the owner of the credential.
   *
   * @example
   * ```ts
   * const createCredentialResponse =
   *   await client.credentials.update('id');
   * ```
   */
  update(
    id: string,
    body: CredentialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CreateCredentialResponse> {
    return this._client.patch(path`/credentials/${id}`, { body, ...options });
  }

  /**
   * Retrieve all credentials from your instance. Only available for the instance
   * owner and admin. Credential data (secrets) is not included.
   *
   * @example
   * ```ts
   * const credentials = await client.credentials.list();
   * ```
   */
  list(
    query: CredentialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CredentialListResponse> {
    return this._client.get('/credentials', { query, ...options });
  }

  /**
   * Deletes a credential from your instance. You must be the owner of the
   * credentials
   *
   * @example
   * ```ts
   * const credential = await client.credentials.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Credential> {
    return this._client.delete(path`/credentials/${id}`, options);
  }

  /**
   * Show credential data schema
   *
   * @example
   * ```ts
   * const response = await client.credentials.retrieveSchema(
   *   'credentialTypeName',
   * );
   * ```
   */
  retrieveSchema(credentialTypeName: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/credentials/schema/${credentialTypeName}`, options);
  }

  /**
   * Transfer a credential to another project.
   *
   * @example
   * ```ts
   * await client.credentials.transfer('id', {
   *   destinationProjectId: 'destinationProjectId',
   * });
   * ```
   */
  transfer(id: string, body: CredentialTransferParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/credentials/${id}/transfer`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CreateCredentialResponse {
  id: string;

  createdAt: string;

  name: string;

  type: string;

  updatedAt: string;
}

export interface Credential {
  name: string;

  type: string;

  id?: string;

  createdAt?: string;

  /**
   * Whether this credential has resolvable fields
   */
  isResolvable?: boolean;

  updatedAt?: string;
}

export interface CredentialListResponse {
  data?: Array<CredentialListResponse.Data>;

  /**
   * Paginate through credentials by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export namespace CredentialListResponse {
  export interface Data extends CredentialsAPI.CreateCredentialResponse {
    /**
     * Shared entries (project id, name, role, createdAt, updatedAt) from the
     * credential's shared relation
     */
    shared: Array<Data.Shared>;
  }

  export namespace Data {
    export interface Shared {
      /**
       * Project ID
       */
      id: string;

      /**
       * When the credential was shared with this project
       */
      createdAt: string;

      /**
       * Project name
       */
      name: string;

      /**
       * Role of the credential in this project (e.g. credential:owner)
       */
      role: string;

      /**
       * When the sharing was last updated
       */
      updatedAt: string;
    }
  }
}

export type CredentialRetrieveSchemaResponse = unknown;

export interface CredentialCreateParams {
  data: unknown;

  name: string;

  type: string;

  /**
   * Whether this credential has resolvable fields
   */
  isResolvable?: boolean;
}

export interface CredentialUpdateParams {
  /**
   * The credential data. Required when changing credential type.
   */
  data?: unknown;

  /**
   * Whether this credential is available globally
   */
  isGlobal?: boolean;

  /**
   * If true, unredacts and merges existing credential data with the provided data.
   * If false, replaces the entire data object.
   */
  isPartialData?: boolean;

  /**
   * Whether this credential has resolvable fields
   */
  isResolvable?: boolean;

  /**
   * The name of the credential
   */
  name?: string;

  /**
   * The credential type. If changing type, data must also be provided.
   */
  type?: string;
}

export interface CredentialListParams {
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

export interface CredentialTransferParams {
  /**
   * The ID of the project to transfer the credential to.
   */
  destinationProjectId: string;
}

export declare namespace Credentials {
  export {
    type CreateCredentialResponse as CreateCredentialResponse,
    type Credential as Credential,
    type CredentialListResponse as CredentialListResponse,
    type CredentialRetrieveSchemaResponse as CredentialRetrieveSchemaResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
    type CredentialListParams as CredentialListParams,
    type CredentialTransferParams as CredentialTransferParams,
  };
}
