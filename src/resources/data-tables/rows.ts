// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Operations about data tables and their rows
 */
export class Rows extends APIResource {
  /**
   * Update rows matching filter conditions in a data table.
   *
   * @example
   * ```ts
   * const row = await client.dataTables.rows.update(
   *   'dataTableId',
   *   {
   *     data: { status: 'completed', updatedBy: 'admin' },
   *     filter: {
   *       type: 'and',
   *       filters: [
   *         {
   *           columnName: 'status',
   *           condition: 'eq',
   *           value: 'pending',
   *         },
   *       ],
   *     },
   *   },
   * );
   * ```
   */
  update(
    dataTableID: string,
    body: RowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RowUpdateResponse> {
    return this._client.patch(path`/data-tables/${dataTableID}/rows/update`, { body, ...options });
  }

  /**
   * Query and retrieve rows from a data table with optional filtering, sorting, and
   * pagination.
   *
   * @example
   * ```ts
   * const rows = await client.dataTables.rows.list(
   *   'dataTableId',
   * );
   * ```
   */
  list(
    dataTableID: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RowListResponse> {
    return this._client.get(path`/data-tables/${dataTableID}/rows`, { query, ...options });
  }

  /**
   * Delete rows matching filter conditions from a data table. Filter is required to
   * prevent accidental deletion of all data.
   *
   * @example
   * ```ts
   * const row = await client.dataTables.rows.delete(
   *   'dataTableId',
   *   { filter: 'filter' },
   * );
   * ```
   */
  delete(
    dataTableID: string,
    params: RowDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RowDeleteResponse> {
    const { filter, dryRun, returnData } = params;
    return this._client.delete(path`/data-tables/${dataTableID}/rows/delete`, {
      query: { filter, dryRun, returnData },
      ...options,
    });
  }

  /**
   * Insert one or more rows into a data table.
   *
   * @example
   * ```ts
   * const response = await client.dataTables.rows.insert(
   *   'dataTableId',
   *   {
   *     data: [
   *       {
   *         name: 'John Doe',
   *         email: 'john@example.com',
   *         age: 30,
   *       },
   *       {
   *         name: 'Jane Smith',
   *         email: 'jane@example.com',
   *         age: 25,
   *       },
   *     ],
   *     returnType: 'all',
   *   },
   * );
   * ```
   */
  insert(
    dataTableID: string,
    body: RowInsertParams,
    options?: RequestOptions,
  ): APIPromise<RowInsertResponse> {
    return this._client.post(path`/data-tables/${dataTableID}/rows`, { body, ...options });
  }

  /**
   * Update an existing row or insert a new one if no row matches the filter
   * conditions.
   *
   * @example
   * ```ts
   * const response = await client.dataTables.rows.upsert(
   *   'dataTableId',
   *   {
   *     data: {
   *       email: 'user@example.com',
   *       name: 'Updated Name',
   *       status: 'active',
   *     },
   *     filter: {
   *       type: 'and',
   *       filters: [
   *         {
   *           columnName: 'email',
   *           condition: 'eq',
   *           value: 'user@example.com',
   *         },
   *       ],
   *     },
   *     returnData: true,
   *   },
   * );
   * ```
   */
  upsert(
    dataTableID: string,
    body: RowUpsertParams,
    options?: RequestOptions,
  ): APIPromise<RowUpsertResponse> {
    return this._client.post(path`/data-tables/${dataTableID}/rows/upsert`, { body, ...options });
  }
}

/**
 * A data table row with system columns (id, createdAt, updatedAt) and user-defined
 * columns
 */
export interface DataTableRow {
  /**
   * The row ID (auto-generated)
   */
  id?: number;

  /**
   * The date and time the row was created
   */
  createdAt?: string;

  /**
   * The date and time the row was last updated
   */
  updatedAt?: string;

  [k: string]: unknown;
}

/**
 * True when returnData is false
 */
export type RowUpdateResponse = boolean | Array<DataTableRow>;

export interface RowListResponse {
  data?: Array<DataTableRow>;

  /**
   * Paginate through rows by setting the cursor parameter to a nextCursor attribute
   * returned by a previous request. Default value fetches the first "page" of the
   * collection.
   */
  nextCursor?: string | null;
}

/**
 * True when returnData is false
 */
export type RowDeleteResponse = boolean | Array<DataTableRow>;

/**
 * Number of rows inserted (when returnType is 'count')
 */
export type RowInsertResponse = RowInsertResponse.Count | Array<number> | Array<DataTableRow>;

export namespace RowInsertResponse {
  /**
   * Number of rows inserted (when returnType is 'count')
   */
  export interface Count {
    count?: number;
  }
}

/**
 * True when returnData is false
 */
export type RowUpsertResponse = boolean | DataTableRow;

export interface RowUpdateParams {
  /**
   * Column values to update
   */
  data: { [key: string]: unknown };

  /**
   * Filter conditions to match rows for update
   */
  filter: RowUpdateParams.Filter;

  /**
   * If true, preview changes without persisting them
   */
  dryRun?: boolean;

  /**
   * If true, return the updated rows; if false, return true on success
   */
  returnData?: boolean;
}

export namespace RowUpdateParams {
  /**
   * Filter conditions to match rows for update
   */
  export interface Filter {
    filters: Array<Filter.Filter>;

    type?: 'and' | 'or';
  }

  export namespace Filter {
    export interface Filter {
      columnName: string;

      condition: 'eq' | 'neq' | 'like' | 'ilike' | 'gt' | 'gte' | 'lt' | 'lte';

      value: unknown;
    }
  }
}

export interface RowListParams {
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
   * Search text across all string columns
   */
  search?: string;

  /**
   * Sort format: columnName:asc or columnName:desc
   */
  sortBy?: string;
}

export interface RowDeleteParams {
  /**
   * JSON string of filter conditions. Required to prevent accidental deletion of all
   * data.
   */
  filter: string;

  /**
   * If true, preview which rows would be deleted without actually deleting them
   */
  dryRun?: boolean;

  /**
   * If true, return the deleted rows; if false, return true on success
   */
  returnData?: boolean;
}

export interface RowInsertParams {
  /**
   * Array of rows to insert. Each row is an object with column names as keys.
   */
  data: Array<{ [key: string]: unknown }>;

  /**
   * - count: Return only the number of rows inserted
   * - id: Return an array of inserted row IDs
   * - all: Return the full row data for all inserted rows
   */
  returnType?: 'count' | 'id' | 'all';
}

export interface RowUpsertParams {
  /**
   * Column values for the row
   */
  data: { [key: string]: unknown };

  /**
   * Filter conditions to match existing row. If no row matches, a new row is
   * inserted.
   */
  filter: RowUpsertParams.Filter;

  /**
   * If true, preview changes without persisting them
   */
  dryRun?: boolean;

  /**
   * If true, return the upserted row; if false, return true on success
   */
  returnData?: boolean;
}

export namespace RowUpsertParams {
  /**
   * Filter conditions to match existing row. If no row matches, a new row is
   * inserted.
   */
  export interface Filter {
    filters: Array<Filter.Filter>;

    type?: 'and' | 'or';
  }

  export namespace Filter {
    export interface Filter {
      columnName: string;

      condition: 'eq' | 'neq' | 'like' | 'ilike' | 'gt' | 'gte' | 'lt' | 'lte';

      value: unknown;
    }
  }
}

export declare namespace Rows {
  export {
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
