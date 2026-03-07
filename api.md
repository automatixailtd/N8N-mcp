# Audit

Types:

- <code><a href="./src/resources/audit.ts">AuditGenerateResponse</a></code>

Methods:

- <code title="post /audit">client.audit.<a href="./src/resources/audit.ts">generate</a>({ ...params }) -> AuditGenerateResponse</code>

# Credentials

Types:

- <code><a href="./src/resources/credentials.ts">CreateCredentialResponse</a></code>
- <code><a href="./src/resources/credentials.ts">Credential</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialListResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialRetrieveSchemaResponse</a></code>

Methods:

- <code title="post /credentials">client.credentials.<a href="./src/resources/credentials.ts">create</a>({ ...params }) -> CreateCredentialResponse</code>
- <code title="patch /credentials/{id}">client.credentials.<a href="./src/resources/credentials.ts">update</a>(id, { ...params }) -> CreateCredentialResponse</code>
- <code title="get /credentials">client.credentials.<a href="./src/resources/credentials.ts">list</a>({ ...params }) -> CredentialListResponse</code>
- <code title="delete /credentials/{id}">client.credentials.<a href="./src/resources/credentials.ts">delete</a>(id) -> Credential</code>
- <code title="get /credentials/schema/{credentialTypeName}">client.credentials.<a href="./src/resources/credentials.ts">retrieveSchema</a>(credentialTypeName) -> unknown</code>
- <code title="put /credentials/{id}/transfer">client.credentials.<a href="./src/resources/credentials.ts">transfer</a>(id, { ...params }) -> void</code>

# Executions

Types:

- <code><a href="./src/resources/executions/executions.ts">Execution</a></code>
- <code><a href="./src/resources/executions/executions.ts">ExecutionListResponse</a></code>

Methods:

- <code title="get /executions/{id}">client.executions.<a href="./src/resources/executions/executions.ts">retrieve</a>(id, { ...params }) -> Execution</code>
- <code title="get /executions">client.executions.<a href="./src/resources/executions/executions.ts">list</a>({ ...params }) -> ExecutionListResponse</code>
- <code title="delete /executions/{id}">client.executions.<a href="./src/resources/executions/executions.ts">delete</a>(id) -> Execution</code>
- <code title="post /executions/{id}/retry">client.executions.<a href="./src/resources/executions/executions.ts">retry</a>(id, { ...params }) -> Execution</code>

## Stop

Types:

- <code><a href="./src/resources/executions/stop.ts">StopMultipleResponse</a></code>

Methods:

- <code title="post /executions/stop">client.executions.stop.<a href="./src/resources/executions/stop.ts">multiple</a>({ ...params }) -> StopMultipleResponse</code>
- <code title="post /executions/{id}/stop">client.executions.stop.<a href="./src/resources/executions/stop.ts">single</a>(id) -> Execution</code>

## Tags

Types:

- <code><a href="./src/resources/executions/tags.ts">TagID</a></code>
- <code><a href="./src/resources/executions/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/executions/tags.ts">TagListResponse</a></code>

Methods:

- <code title="put /executions/{id}/tags">client.executions.tags.<a href="./src/resources/executions/tags.ts">update</a>(id, [ ...body ]) -> TagUpdateResponse</code>
- <code title="get /executions/{id}/tags">client.executions.tags.<a href="./src/resources/executions/tags.ts">list</a>(id) -> TagListResponse</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">Tag</a></code>
- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /tags">client.tags.<a href="./src/resources/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="get /tags/{id}">client.tags.<a href="./src/resources/tags.ts">retrieve</a>(id) -> Tag</code>
- <code title="put /tags/{id}">client.tags.<a href="./src/resources/tags.ts">update</a>(id, { ...params }) -> Tag</code>
- <code title="get /tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /tags/{id}">client.tags.<a href="./src/resources/tags.ts">delete</a>(id) -> Tag</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">Node</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">Workflow</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRetrieveVersionResponse</a></code>

Methods:

- <code title="post /workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">create</a>({ ...params }) -> Workflow</code>
- <code title="get /workflows/{id}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieve</a>(id, { ...params }) -> Workflow</code>
- <code title="put /workflows/{id}">client.workflows.<a href="./src/resources/workflows/workflows.ts">update</a>(id, { ...params }) -> Workflow</code>
- <code title="get /workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowListResponse</code>
- <code title="delete /workflows/{id}">client.workflows.<a href="./src/resources/workflows/workflows.ts">delete</a>(id) -> Workflow</code>
- <code title="post /workflows/{id}/deactivate">client.workflows.<a href="./src/resources/workflows/workflows.ts">deactivate</a>(id) -> Workflow</code>
- <code title="post /workflows/{id}/activate">client.workflows.<a href="./src/resources/workflows/workflows.ts">publish</a>(id, { ...params }) -> Workflow</code>
- <code title="get /workflows/{id}/{versionId}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieveVersion</a>(versionID, { ...params }) -> WorkflowRetrieveVersionResponse</code>
- <code title="put /workflows/{id}/transfer">client.workflows.<a href="./src/resources/workflows/workflows.ts">transfer</a>(id, { ...params }) -> void</code>

## Tags

Types:

- <code><a href="./src/resources/workflows/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/tags.ts">TagListResponse</a></code>

Methods:

- <code title="put /workflows/{id}/tags">client.workflows.tags.<a href="./src/resources/workflows/tags.ts">update</a>(id, [ ...body ]) -> TagUpdateResponse</code>
- <code title="get /workflows/{id}/tags">client.workflows.tags.<a href="./src/resources/workflows/tags.ts">list</a>(id) -> TagListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>([ ...body ]) -> UserCreateResponse</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id, { ...params }) -> User</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{id}">client.users.<a href="./src/resources/users.ts">delete</a>(id) -> void</code>
- <code title="patch /users/{id}/role">client.users.<a href="./src/resources/users.ts">updateRole</a>(id, { ...params }) -> void</code>

# SourceControl

Types:

- <code><a href="./src/resources/source-control.ts">SourceControlPullChangesResponse</a></code>

Methods:

- <code title="post /source-control/pull">client.sourceControl.<a href="./src/resources/source-control.ts">pullChanges</a>({ ...params }) -> SourceControlPullChangesResponse</code>

# Variables

Types:

- <code><a href="./src/resources/variables.ts">VariableCreate</a></code>
- <code><a href="./src/resources/variables.ts">VariableListResponse</a></code>

Methods:

- <code title="post /variables">client.variables.<a href="./src/resources/variables.ts">create</a>({ ...params }) -> void</code>
- <code title="put /variables/{id}">client.variables.<a href="./src/resources/variables.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /variables">client.variables.<a href="./src/resources/variables.ts">list</a>({ ...params }) -> VariableListResponse</code>
- <code title="delete /variables/{id}">client.variables.<a href="./src/resources/variables.ts">delete</a>(id) -> void</code>

# DataTables

Types:

- <code><a href="./src/resources/data-tables/data-tables.ts">DataTable</a></code>
- <code><a href="./src/resources/data-tables/data-tables.ts">DataTableListResponse</a></code>

Methods:

- <code title="post /data-tables">client.dataTables.<a href="./src/resources/data-tables/data-tables.ts">create</a>({ ...params }) -> DataTable</code>
- <code title="get /data-tables/{dataTableId}">client.dataTables.<a href="./src/resources/data-tables/data-tables.ts">retrieve</a>(dataTableID) -> DataTable</code>
- <code title="patch /data-tables/{dataTableId}">client.dataTables.<a href="./src/resources/data-tables/data-tables.ts">update</a>(dataTableID, { ...params }) -> DataTable</code>
- <code title="get /data-tables">client.dataTables.<a href="./src/resources/data-tables/data-tables.ts">list</a>({ ...params }) -> DataTableListResponse</code>
- <code title="delete /data-tables/{dataTableId}">client.dataTables.<a href="./src/resources/data-tables/data-tables.ts">delete</a>(dataTableID) -> void</code>

## Rows

Types:

- <code><a href="./src/resources/data-tables/rows.ts">DataTableRow</a></code>
- <code><a href="./src/resources/data-tables/rows.ts">RowUpdateResponse</a></code>
- <code><a href="./src/resources/data-tables/rows.ts">RowListResponse</a></code>
- <code><a href="./src/resources/data-tables/rows.ts">RowDeleteResponse</a></code>
- <code><a href="./src/resources/data-tables/rows.ts">RowInsertResponse</a></code>
- <code><a href="./src/resources/data-tables/rows.ts">RowUpsertResponse</a></code>

Methods:

- <code title="patch /data-tables/{dataTableId}/rows/update">client.dataTables.rows.<a href="./src/resources/data-tables/rows.ts">update</a>(dataTableID, { ...params }) -> RowUpdateResponse</code>
- <code title="get /data-tables/{dataTableId}/rows">client.dataTables.rows.<a href="./src/resources/data-tables/rows.ts">list</a>(dataTableID, { ...params }) -> RowListResponse</code>
- <code title="delete /data-tables/{dataTableId}/rows/delete">client.dataTables.rows.<a href="./src/resources/data-tables/rows.ts">delete</a>(dataTableID, { ...params }) -> RowDeleteResponse</code>
- <code title="post /data-tables/{dataTableId}/rows">client.dataTables.rows.<a href="./src/resources/data-tables/rows.ts">insert</a>(dataTableID, { ...params }) -> RowInsertResponse</code>
- <code title="post /data-tables/{dataTableId}/rows/upsert">client.dataTables.rows.<a href="./src/resources/data-tables/rows.ts">upsert</a>(dataTableID, { ...params }) -> RowUpsertResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> void</code>
- <code title="put /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectID, { ...params }) -> void</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectID) -> void</code>

## Users

Types:

- <code><a href="./src/resources/projects/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users.ts">list</a>(projectID, { ...params }) -> UserListResponse</code>
- <code title="delete /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="post /projects/{projectId}/users">client.projects.users.<a href="./src/resources/projects/users.ts">add</a>(projectID, { ...params }) -> void</code>
- <code title="patch /projects/{projectId}/users/{userId}">client.projects.users.<a href="./src/resources/projects/users.ts">updateRole</a>(userID, { ...params }) -> void</code>
