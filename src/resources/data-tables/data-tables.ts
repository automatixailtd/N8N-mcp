// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RowsAPI from './rows';
import {
  DataTableRow,
  RowDeleteParams,
  RowDeleteResponse,
  RowInsertParams,
  RowInsertResponse,
  RowListParams,
  RowListResponse,
  RowUpdateParams,
  RowUpdateResponse,
  RowUpsertParams,
  RowUpsertResponse,
  Rows,
} from './rows';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about data tables and their rows
 */
export class DataTables extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);

  /**
   * Create a new data table in your workspace.
   *
   * @example
   * ```ts
   * const dataTable = await client.dataTables.create({
   *   columns: [
   *     { name: 'email', type: 'string' },
   *     { name: 'status', type: 'string' },
   *     { name: 'age', type: 'number' },
   *   ],
   *   name: 'customers',
   * });
   * ```
   */
  create(body: DataTableCreateParams, options?: RequestOptions): APIPromise<DataTable> {
    return this._client.post('/data-tables', { body, ...options });
  }

  /**
   * Retrieve a specific data table by ID.
   *
   * @example
   * ```ts
   * const dataTable = await client.dataTables.retrieve(
   *   'dataTableId',
   * );
   * ```
   */
  retrieve(dataTableID: string, options?: RequestOptions): APIPromise<DataTable> {
    return this._client.get(path`/data-tables/${dataTableID}`, options);
  }

  /**
   * Update a data table's name.
   *
   * @example
   * ```ts
   * const dataTable = await client.dataTables.update(
   *   'dataTableId',
   *   { name: 'updated-customers' },
   * );
   * ```
   */
  update(dataTableID: string, body: DataTableUpdateParams, options?: RequestOptions): APIPromise<DataTable> {
    return this._client.patch(path`/data-tables/${dataTableID}`, { body, ...options });
  }

  /**
   * Retrieve a list of all data tables with optional filtering, sorting, and
   * pagination.
   *
   * @example
   * ```ts
   * const dataTables = await client.dataTables.list();
   * ```
   */
  list(
    query: DataTableListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataTableListResponse> {
    return this._client.get('/data-tables', { query, ...options });
  }

  /**
   * Delete a data table. This will also delete all rows in the table.
   *
   * @example
   * ```ts
   * await client.dataTables.delete('dataTableId');
   * ```
   */
  delete(dataTableID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/data-tables/${dataTableID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DataTable {
  /**
   * Unique identifier for the data table
   */
  id: string;

  /**
   * Column definitions
   */
  columns: Array<DataTable.Column>;

  /**
   * Timestamp when the table was created
   */
  createdAt: string;

  /**
   * Name of the data table
   */
  name: string;

  /**
   * ID of the project this table belongs to
   */
  projectId: string;

  /**
   * Timestamp when the table was last updated
   */
  updatedAt: string;
}

export namespace DataTable {
  export interface Column {
    /**
     * Column ID
     */
    id?: string;

    /**
     * Column position
     */
    index?: number;

    /**
     * Column name
     */
    name?: string;

    /**
     * Column data type
     */
    type?: 'string' | 'number' | 'boolean' | 'date';
  }
}

export interface DataTableListResponse {
  data?: Array<DataTable>;

  /**
   * Paginate through data tables by setting the cursor parameter to a nextCursor
   * attribute returned by a previous request. Default value fetches the first "page"
   * of the collection.
   */
  nextCursor?: string | null;
}

export interface DataTableCreateParams {
  /**
   * Column definitions for the table
   */
  columns: Array<DataTableCreateParams.Column>;

  /**
   * Name of the data table
   */
  name: string;
}

export namespace DataTableCreateParams {
  export interface Column {
    /**
     * Column name
     */
    name: string;

    /**
     * Column data type
     */
    type: 'string' | 'number' | 'boolean' | 'date' | 'json';
  }
}

export interface DataTableUpdateParams {
  /**
   * New name for the data table
   */
  name: string;
}

export interface DataTableListParams {
  /**
   * Paginate by setting the cursor parameter to the nextCursor attribute returned by
   * the previous request's response. Default value fetches the first "page" of the
   * collection. See pagination for more detail.
   */
  cursor?: string;

  /**
   * JSON string of filter conditions
   */
  filter?: string;

  /**
   * The maximum number of items to return.
   */
  limit?: number;

  /**
   * Sort format: field:asc or field:desc
   */
  sortBy?: string;
}

DataTables.Rows = Rows;

export declare namespace DataTables {
  export {
    type DataTable as DataTable,
    type DataTableListResponse as DataTableListResponse,
    type DataTableCreateParams as DataTableCreateParams,
    type DataTableUpdateParams as DataTableUpdateParams,
    type DataTableListParams as DataTableListParams,
  };

  export {
    Rows as Rows,
    type DataTableRow as DataTableRow,
    type RowUpdateResponse as RowUpdateResponse,
    type RowListResponse as RowListResponse,
    type RowDeleteResponse as RowDeleteResponse,
    type RowInsertResponse as RowInsertResponse,
    type RowUpsertResponse as RowUpsertResponse,
    type RowUpdateParams as RowUpdateParams,
    type RowListParams as RowListParams,
    type RowDeleteParams as RowDeleteParams,
    type RowInsertParams as RowInsertParams,
    type RowUpsertParams as RowUpsertParams,
  };
}
