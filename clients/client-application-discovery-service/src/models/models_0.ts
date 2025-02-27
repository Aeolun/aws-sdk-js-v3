// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ApplicationDiscoveryServiceServiceException as __BaseException } from "./ApplicationDiscoveryServiceServiceException";

/**
 * <p>Information about agents or connectors that were instructed to start collecting data.
 *       Information includes the agent/connector ID, a description of the operation, and whether the
 *       agent/connector configuration was updated.</p>
 */
export interface AgentConfigurationStatus {
  /**
   * <p>The agent/connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>Information about the status of the <code>StartDataCollection</code> and
   *         <code>StopDataCollection</code> operations. The system has recorded the data collection
   *       operation. The agent/connector receives this command the next time it polls for a new command.
   *     </p>
   */
  operationSucceeded?: boolean;

  /**
   * <p>A description of the operation performed.</p>
   */
  description?: string;
}

/**
 * <p>Network details about the host where the agent/connector resides.</p>
 */
export interface AgentNetworkInfo {
  /**
   * <p>The IP address for the host where the agent/connector resides.</p>
   */
  ipAddress?: string;

  /**
   * <p>The MAC address for the host where the agent/connector resides.</p>
   */
  macAddress?: string;
}

export enum AgentStatus {
  BLACKLISTED = "BLACKLISTED",
  HEALTHY = "HEALTHY",
  RUNNING = "RUNNING",
  SHUTDOWN = "SHUTDOWN",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Information about agents or connectors associated with the user’s Amazon Web Services account.
 *       Information includes agent or connector IDs, IP addresses, media access control (MAC)
 *       addresses, agent or connector health, hostname where the agent or connector resides, and agent
 *       version for each agent.</p>
 */
export interface AgentInfo {
  /**
   * <p>The agent or connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>The name of the host where the agent or connector resides. The host can be a server or
   *       virtual machine.</p>
   */
  hostName?: string;

  /**
   * <p>Network details about the host where the agent or connector resides.</p>
   */
  agentNetworkInfoList?: AgentNetworkInfo[];

  /**
   * <p>The ID of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The agent or connector version.</p>
   */
  version?: string;

  /**
   * <p>The health of the agent or connector.</p>
   */
  health?: AgentStatus | string;

  /**
   * <p>Time since agent or connector health was reported.</p>
   */
  lastHealthPingTime?: string;

  /**
   * <p>Status of the collection process for an agent or connector.</p>
   */
  collectionStatus?: string;

  /**
   * <p>Type of agent.</p>
   */
  agentType?: string;

  /**
   * <p>Agent's first registration timestamp in UTC.</p>
   */
  registeredTime?: string;
}

export interface AssociateConfigurationItemsToApplicationRequest {
  /**
   * <p>The configuration ID of an application with which items are to be associated.</p>
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>The ID of each configuration item to be associated with an application.</p>
   */
  configurationIds: string[] | undefined;
}

export interface AssociateConfigurationItemsToApplicationResponse {}

/**
 * <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
 */
export class AuthorizationErrorException extends __BaseException {
  readonly name: "AuthorizationErrorException" = "AuthorizationErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationErrorException, __BaseException>) {
    super({
      name: "AuthorizationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationErrorException.prototype);
  }
}

/**
 * <p>The home region is not set. Set the home region to continue.</p>
 */
export class HomeRegionNotSetException extends __BaseException {
  readonly name: "HomeRegionNotSetException" = "HomeRegionNotSetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HomeRegionNotSetException, __BaseException>) {
    super({
      name: "HomeRegionNotSetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HomeRegionNotSetException.prototype);
  }
}

/**
 * <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export class ServerInternalErrorException extends __BaseException {
  readonly name: "ServerInternalErrorException" = "ServerInternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalErrorException, __BaseException>) {
    super({
      name: "ServerInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalErrorException.prototype);
  }
}

export interface BatchDeleteImportDataRequest {
  /**
   * <p>The IDs for the import tasks that you want to delete.</p>
   */
  importTaskIds: string[] | undefined;
}

export enum BatchDeleteImportDataErrorCode {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  NOT_FOUND = "NOT_FOUND",
  OVER_LIMIT = "OVER_LIMIT",
}

/**
 * <p>Error messages returned for each import task that you deleted as a response for this
 *       command.</p>
 */
export interface BatchDeleteImportDataError {
  /**
   * <p>The unique import ID associated with the error that occurred.</p>
   */
  importTaskId?: string;

  /**
   * <p>The type of error that occurred for a specific import task.</p>
   */
  errorCode?: BatchDeleteImportDataErrorCode | string;

  /**
   * <p>The description of the error that occurred for a specific import task.</p>
   */
  errorDescription?: string;
}

export interface BatchDeleteImportDataResponse {
  /**
   * <p>Error messages returned for each import task that you deleted as a response for this
   *       command.</p>
   */
  errors?: BatchDeleteImportDataError[];
}

export interface CreateApplicationRequest {
  /**
   * <p>Name of the application to be created.</p>
   */
  name: string | undefined;

  /**
   * <p>Description of the application to be created.</p>
   */
  description?: string;
}

export interface CreateApplicationResponse {
  /**
   * <p>Configuration ID of an application to be created.</p>
   */
  configurationId?: string;
}

/**
 * <p>Metadata that help you categorize IT assets.</p>
 *          <important>
 *             <p>Do not store sensitive information (like personal data) in tags.</p>
 *          </important>
 */
export interface Tag {
  /**
   * <p>The type of tag on which to filter.</p>
   */
  key: string | undefined;

  /**
   * <p>A value for a tag key on which to filter.</p>
   */
  value: string | undefined;
}

export interface CreateTagsRequest {
  /**
   * <p>A list of configuration items that you want to tag.</p>
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to associate with one or more configuration items. Specify the tags
   *       that you want to create in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   */
  tags: Tag[] | undefined;
}

export interface CreateTagsResponse {}

/**
 * <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface DeleteApplicationsRequest {
  /**
   * <p>Configuration ID of an application to be deleted.</p>
   */
  configurationIds: string[] | undefined;
}

export interface DeleteApplicationsResponse {}

export interface DeleteTagsRequest {
  /**
   * <p>A list of configuration items with tags that you want to delete.</p>
   */
  configurationIds: string[] | undefined;

  /**
   * <p>Tags that you want to delete from one or more configuration items. Specify the tags
   *       that you want to delete in a <i>key</i>-<i>value</i> format. For
   *       example:</p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   */
  tags?: Tag[];
}

export interface DeleteTagsResponse {}

/**
 * <p>A filter that can use conditional operators.</p>
 *          <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered
 *         Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User
 *         Guide</i>. </p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   */
  name: string | undefined;

  /**
   * <p>A string value on which to filter. For example, if you choose the
   *         <code>destinationServer.osVersion</code> filter name, you could specify <code>Ubuntu</code>
   *       for the value.</p>
   */
  values: string[] | undefined;

  /**
   * <p>A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS,
   *       CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as
   *       though concatenated by <i>AND</i>. If you specify multiple values for a
   *       particular filter, the system differentiates the values using <i>OR</i>. Calling
   *       either <i>DescribeConfigurations</i> or <i>ListConfigurations</i>
   *       returns attributes of matching configuration items.</p>
   */
  condition: string | undefined;
}

export interface DescribeAgentsRequest {
  /**
   * <p>The agent or the Connector IDs for which you want information. If you specify no IDs,
   *       the system returns information about all agents/Connectors associated with your Amazon Web Services user
   *       account.</p>
   */
  agentIds?: string[];

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>{"key": "collectionStatus", "value": "STARTED"}</code>
   *          </p>
   */
  filters?: Filter[];

  /**
   * <p>The total number of agents/Connectors to return in a single page of output. The maximum
   *       value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;
}

export interface DescribeAgentsResponse {
  /**
   * <p>Lists agents or the Connector by ID or lists all agents/Connectors associated with your
   *       user account if you did not specify an agent/Connector ID. The output includes agent/Connector
   *       IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name
   *       where the agent/Connector resides, and the version number of each agent/Connector.</p>
   */
  agentsInfo?: AgentInfo[];

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>DescribeAgentsRequest$agentIds</code> but set
   *         <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along
   *       with this token. Use this token in the next query to retrieve the next set of 10.</p>
   */
  nextToken?: string;
}

export interface DescribeConfigurationsRequest {
  /**
   * <p>One or more configuration IDs.</p>
   */
  configurationIds: string[] | undefined;
}

export interface DescribeConfigurationsResponse {
  /**
   * <p>A key in the response map. The value is an array of data.</p>
   */
  configurations?: Record<string, string>[];
}

export interface DescribeContinuousExportsRequest {
  /**
   * <p>The unique IDs assigned to the exports.</p>
   */
  exportIds?: string[];

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   */
  nextToken?: string;
}

export enum DataSource {
  AGENT = "AGENT",
}

export enum ContinuousExportStatus {
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  INACTIVE = "INACTIVE",
  START_FAILED = "START_FAILED",
  START_IN_PROGRESS = "START_IN_PROGRESS",
  STOP_FAILED = "STOP_FAILED",
  STOP_IN_PROGRESS = "STOP_IN_PROGRESS",
}

/**
 * <p>A list of continuous export descriptions.</p>
 */
export interface ContinuousExportDescription {
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>Describes the status of the export. Can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>START_IN_PROGRESS - setting up resources to start continuous export.</p>
   *             </li>
   *             <li>
   *                <p>START_FAILED - an error occurred setting up continuous export. To recover, call
   *           start-continuous-export again.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE - data is being exported to the customer bucket.</p>
   *             </li>
   *             <li>
   *                <p>ERROR - an error occurred during export. To fix the issue, call
   *           stop-continuous-export and start-continuous-export.</p>
   *             </li>
   *             <li>
   *                <p>STOP_IN_PROGRESS - stopping the export.</p>
   *             </li>
   *             <li>
   *                <p>STOP_FAILED - an error occurred stopping the export. To recover, call
   *           stop-continuous-export again.</p>
   *             </li>
   *             <li>
   *                <p>INACTIVE - the continuous export has been stopped. Data is no longer being exported
   *           to the customer bucket.</p>
   *             </li>
   *          </ul>
   */
  status?: ContinuousExportStatus | string;

  /**
   * <p>Contains information about any errors that have occurred. This data type can have the
   *       following values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon
   *           Athena. Contact your Amazon Web Services administrator for help. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html">Setting Up Amazon Web Services Application Discovery Service</a> in the Application Discovery
   *           Service User Guide.</p>
   *             </li>
   *             <li>
   *                <p>DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data
   *           Firehose delivery streams. Reduce the number of streams or request a limit increase and
   *           try again. For more information, see <a href="http://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the Amazon Kinesis Data Streams Developer
   *           Guide.</p>
   *             </li>
   *             <li>
   *                <p>FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because
   *           your IAM User is missing the AWSApplicationDiscoveryServiceFirehose role. Turn on Data
   *           Exploration in Amazon Athena and try again. For more information, see <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html#setting-up-user-policy">Step 3: Provide Application Discovery Service Access to Non-Administrator Users by
   *             Attaching Policies</a> in the Application Discovery Service User Guide.</p>
   *             </li>
   *             <li>
   *                <p>FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state
   *           because your IAM User is missing one or more of the Kinesis data delivery
   *           streams.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an
   *           internal failure. Try again later. If this problem persists, contact Amazon Web Services
   *           Support.</p>
   *             </li>
   *             <li>
   *                <p>LAKE_FORMATION_ACCESS_DENIED - You don't have sufficient lake formation permissions
   *           to start continuous export. For more information, see <a href="http://docs.aws.amazon.com/lake-formation/latest/dg/upgrade-glue-lake-formation.html">
   *             Upgrading Amazon Web Services Glue Data Permissions to the Amazon Web Services Lake Formation Model </a> in the
   *           Amazon Web Services <i>Lake Formation Developer Guide</i>. </p>
   *                <p>You can use one of the following two ways to resolve this issue.</p>
   *                <ol>
   *                   <li>
   *                      <p>If you don’t want to use the Lake Formation permission model, you can change
   *               the default Data Catalog settings to use only Amazon Web Services Identity and Access Management
   *               (IAM) access control for new databases. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#setup-change-cat-settings">Change Data Catalog Settings</a> in the <i>Lake Formation
   *                   Developer Guide</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>You can give the service-linked IAM roles
   *               AWSServiceRoleForApplicationDiscoveryServiceContinuousExport and
   *               AWSApplicationDiscoveryServiceFirehose the required Lake Formation permissions. For
   *               more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/granting-database-permissions.html">
   *                 Granting Database Permissions</a> in the <i>Lake Formation
   *                   Developer Guide</i>. </p>
   *                      <ol>
   *                         <li>
   *                            <p>AWSServiceRoleForApplicationDiscoveryServiceContinuousExport - Grant
   *                   database creator permissions, which gives the role database creation ability and
   *                   implicit permissions for any created tables. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/implicit-permissions.html">
   *                     Implicit Lake Formation Permissions </a> in the <i>Lake
   *                       Formation Developer Guide</i>.</p>
   *                         </li>
   *                         <li>
   *                            <p>AWSApplicationDiscoveryServiceFirehose - Grant describe permissions for all
   *                   tables in the database.</p>
   *                         </li>
   *                      </ol>
   *                   </li>
   *                </ol>
   *             </li>
   *             <li>
   *                <p>S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the
   *           number of S3 buckets or request a limit increase and try again. For more
   *           information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
   *             Restrictions and Limitations</a> in the Amazon Simple Storage Service Developer
   *           Guide.</p>
   *             </li>
   *             <li>
   *                <p>S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You
   *           must sign up before you can use Amazon S3. You can sign up at the following URL: <a href="https://aws.amazon.com/s3">https://aws.amazon.com/s3</a>.</p>
   *             </li>
   *          </ul>
   */
  statusDetail?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>An object which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   */
  schemaStorageConfig?: Record<string, string>;
}

export interface DescribeContinuousExportsResponse {
  /**
   * <p>A list of continuous export descriptions.</p>
   */
  descriptions?: ContinuousExportDescription[];

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   */
  nextToken?: string;
}

/**
 * <p>This operation is not permitted.</p>
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
  }
}

export interface DescribeExportConfigurationsRequest {
  /**
   * <p>A list of continuous export IDs to search for.</p>
   */
  exportIds?: string[];

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export
   *       descriptions returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   */
  nextToken?: string;
}

export enum ExportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Information regarding the export status of discovered data. The value is an array of
 *       objects.</p>
 */
export interface ExportInfo {
  /**
   * <p>A unique identifier used to query an export.</p>
   */
  exportId: string | undefined;

  /**
   * <p>The status of the data export job.</p>
   */
  exportStatus: ExportStatus | string | undefined;

  /**
   * <p>A status message provided for API callers.</p>
   */
  statusMessage: string | undefined;

  /**
   * <p>A URL for an Amazon S3 bucket where you can review the exported data. The URL is
   *       displayed only if the export succeeded.</p>
   */
  configurationsDownloadUrl?: string;

  /**
   * <p>The time that the data export was initiated.</p>
   */
  exportRequestTime: Date | undefined;

  /**
   * <p>If true, the export of agent information exceeded the size limit for a single export
   *       and the exported data is incomplete for the requested time range. To address this, select a
   *       smaller time range for the export by using <code>startDate</code> and
   *       <code>endDate</code>.</p>
   */
  isTruncated?: boolean;

  /**
   * <p>The value of <code>startTime</code> parameter in the <code>StartExportTask</code>
   *       request. If no <code>startTime</code> was requested, this result does not appear in
   *         <code>ExportInfo</code>.</p>
   */
  requestedStartTime?: Date;

  /**
   * <p>The <code>endTime</code> used in the <code>StartExportTask</code> request. If no
   *         <code>endTime</code> was requested, this result does not appear in
   *       <code>ExportInfo</code>.</p>
   */
  requestedEndTime?: Date;
}

export interface DescribeExportConfigurationsResponse {
  /**
   * <p></p>
   */
  exportsInfo?: ExportInfo[];

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   */
  nextToken?: string;
}

/**
 * <p>Used to select which agent's data is to be exported. A single agent ID may be selected
 *       for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.</p>
 */
export interface ExportFilter {
  /**
   * <p>A single <code>ExportFilter</code> name. Supported filters:
   *       <code>agentIds</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>A single agent ID for a Discovery Agent. An agent ID can be found using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html">DescribeAgents</a> action. Typically an ADS agent ID is in the form
   *         <code>o-0123456789abcdef0</code>.</p>
   */
  values: string[] | undefined;

  /**
   * <p>Supported condition: <code>EQUALS</code>
   *          </p>
   */
  condition: string | undefined;
}

export interface DescribeExportTasksRequest {
  /**
   * <p>One or more unique identifiers used to query the status of an export request.</p>
   */
  exportIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AgentId</code> - ID of the agent whose collected data will be
   *           exported</p>
   *             </li>
   *          </ul>
   */
  filters?: ExportFilter[];

  /**
   * <p>The maximum number of volume results returned by <code>DescribeExportTasks</code> in
   *       paginated output. When this parameter is used, <code>DescribeExportTasks</code> only returns
   *         <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *       response element.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *         <code>DescribeExportTasks</code> request where <code>maxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>nextToken</code> value. This value is null when there
   *       are no more results to return.</p>
   */
  nextToken?: string;
}

export interface DescribeExportTasksResponse {
  /**
   * <p>Contains one or more sets of export request details. When the status of a request is
   *         <code>SUCCEEDED</code>, the response includes a URL for an Amazon S3 bucket where you can
   *       view the data in a CSV file.</p>
   */
  exportsInfo?: ExportInfo[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *         <code>DescribeExportTasks</code> request. When the results of a
   *         <code>DescribeExportTasks</code> request exceed <code>maxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is null when there are no more results
   *       to return.</p>
   */
  nextToken?: string;
}

export enum ImportTaskFilterName {
  IMPORT_TASK_ID = "IMPORT_TASK_ID",
  NAME = "NAME",
  STATUS = "STATUS",
}

/**
 * <p>A name-values pair of elements you can use to filter the results when querying your import
 *       tasks. Currently, wildcards are not supported for filters.</p>
 *
 *          <note>
 *             <p>When filtering by import status, all other filter values are ignored.</p>
 *          </note>
 */
export interface ImportTaskFilter {
  /**
   * <p>The name, status, or import task ID for a specific import task.</p>
   */
  name?: ImportTaskFilterName | string;

  /**
   * <p>An array of strings that you can provide to match against a specific name, status, or
   *       import task ID to filter the results for your import task queries.</p>
   */
  values?: string[];
}

export interface DescribeImportTasksRequest {
  /**
   * <p>An array of name-value pairs that you provide to filter the results for the
   *         <code>DescribeImportTask</code> request to a specific subset of results. Currently, wildcard
   *       values aren't supported for filters.</p>
   */
  filters?: ImportTaskFilter[];

  /**
   * <p>The maximum number of results that you want this request to return, up to 100.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to request a specific page of results.</p>
   */
  nextToken?: string;
}

export enum ImportStatus {
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_FAILED_LIMIT_EXCEEDED = "DELETE_FAILED_LIMIT_EXCEEDED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE = "IMPORT_COMPLETE",
  IMPORT_COMPLETE_WITH_ERRORS = "IMPORT_COMPLETE_WITH_ERRORS",
  IMPORT_FAILED = "IMPORT_FAILED",
  IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED",
  IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED",
  IMPORT_IN_PROGRESS = "IMPORT_IN_PROGRESS",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

/**
 * <p>An array of information related to the import task request that includes status
 *       information, times, IDs, the Amazon S3 Object URL for the import file, and more.</p>
 */
export interface ImportTask {
  /**
   * <p>The unique ID for a specific import task. These IDs aren't globally unique, but they are
   *       unique within an Amazon Web Services account.</p>
   */
  importTaskId?: string;

  /**
   * <p>A unique token used to prevent the same import request from occurring more than once. If
   *       you didn't provide a token, a token was automatically generated when the import task request
   *       was sent.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A descriptive name for an import task. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   */
  name?: string;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   */
  importUrl?: string;

  /**
   * <p>The status of the import task. An import can have the status of
   *         <code>IMPORT_COMPLETE</code> and still have some records fail to import from the overall
   *       request. More information can be found in the downloadable archive defined in the
   *         <code>errorsAndFailedEntriesZip</code> field, or in the Migration Hub management
   *       console.</p>
   */
  status?: ImportStatus | string;

  /**
   * <p>The time that the import task request was made, presented in the Unix time stamp
   *       format.</p>
   */
  importRequestTime?: Date;

  /**
   * <p>The time that the import task request finished, presented in the Unix time stamp
   *       format.</p>
   */
  importCompletionTime?: Date;

  /**
   * <p>The time that the import task request was deleted, presented in the Unix time stamp
   *       format.</p>
   */
  importDeletedTime?: Date;

  /**
   * <p>The total number of server records in the import file that were successfully
   *       imported.</p>
   */
  serverImportSuccess?: number;

  /**
   * <p>The total number of server records in the import file that failed to be imported.</p>
   */
  serverImportFailure?: number;

  /**
   * <p>The total number of application records in the import file that were successfully
   *       imported.</p>
   */
  applicationImportSuccess?: number;

  /**
   * <p>The total number of application records in the import file that failed to be
   *       imported.</p>
   */
  applicationImportFailure?: number;

  /**
   * <p>A link to a compressed archive folder (in the ZIP format) that contains an error log and a
   *       file of failed records. You can use these two files to quickly identify records that failed,
   *       why they failed, and correct those records. Afterward, you can upload the corrected file to
   *       your Amazon S3 bucket and create another import task request.</p>
   *
   *          <p>This field also includes authorization information so you can confirm the authenticity of
   *       the compressed archive before you download it.</p>
   *
   *          <p>If some records failed to be imported we recommend that you correct the records in the
   *       failed entries file and then imports that failed entries file. This prevents you from having
   *       to correct and update the larger original file and attempt importing it again.</p>
   */
  errorsAndFailedEntriesZip?: string;
}

export interface DescribeImportTasksResponse {
  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A returned array of import tasks that match any applied filters, up to the specified
   *       number of maximum results.</p>
   */
  tasks?: ImportTask[];
}

/**
 * <p>The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>,
 *         <code>configurationId</code>.</p>
 */
export interface TagFilter {
  /**
   * <p>A name of the tag filter.</p>
   */
  name: string | undefined;

  /**
   * <p>Values for the tag filter.</p>
   */
  values: string[] | undefined;
}

export interface DescribeTagsRequest {
  /**
   * <p>You can filter the list using a <i>key</i>-<i>value</i>
   *       format. You can separate these items by using logical operators. Allowed filters include
   *         <code>tagKey</code>, <code>tagValue</code>, and <code>configurationId</code>. </p>
   */
  filters?: TagFilter[];

  /**
   * <p>The total number of items to return in a single page of output. The maximum value is
   *       100.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  nextToken?: string;
}

export enum ConfigurationItemType {
  APPLICATION = "APPLICATION",
  CONNECTIONS = "CONNECTION",
  PROCESS = "PROCESS",
  SERVER = "SERVER",
}

/**
 * <p>Tags for a configuration item. Tags are metadata that help you categorize IT
 *       assets.</p>
 */
export interface ConfigurationTag {
  /**
   * <p>A type of IT asset to tag.</p>
   */
  configurationType?: ConfigurationItemType | string;

  /**
   * <p>The configuration ID for the item to tag. You can specify a list of keys and
   *       values.</p>
   */
  configurationId?: string;

  /**
   * <p>A type of tag on which to filter. For example,
   *       <i>serverType</i>.</p>
   */
  key?: string;

  /**
   * <p>A value on which to filter. For example <i>key = serverType</i> and
   *         <i>value = web server</i>.</p>
   */
  value?: string;

  /**
   * <p>The time the configuration tag was created in Coordinated Universal Time
   *       (UTC).</p>
   */
  timeOfCreation?: Date;
}

export interface DescribeTagsResponse {
  /**
   * <p>Depending on the input, this is a list of configuration items tagged with a specific
   *       tag, or a list of tags for a specific configuration item.</p>
   */
  tags?: ConfigurationTag[];

  /**
   * <p>The call returns a token. Use this token to get the next set of results.</p>
   */
  nextToken?: string;
}

export interface DisassociateConfigurationItemsFromApplicationRequest {
  /**
   * <p>Configuration ID of an application from which each item is disassociated.</p>
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>Configuration ID of each item to be disassociated from an application.</p>
   */
  configurationIds: string[] | undefined;
}

export interface DisassociateConfigurationItemsFromApplicationResponse {}

export interface ExportConfigurationsResponse {
  /**
   * <p>A unique identifier that you can use to query the export status.</p>
   */
  exportId?: string;
}

export interface GetDiscoverySummaryRequest {}

export interface CustomerAgentlessCollectorInfo {
  activeAgentlessCollectors: number | undefined;
  healthyAgentlessCollectors: number | undefined;
  denyListedAgentlessCollectors: number | undefined;
  shutdownAgentlessCollectors: number | undefined;
  unhealthyAgentlessCollectors: number | undefined;
  totalAgentlessCollectors: number | undefined;
  unknownAgentlessCollectors: number | undefined;
}

/**
 * <p>Inventory data for installed discovery agents.</p>
 */
export interface CustomerAgentInfo {
  /**
   * <p>Number of active discovery agents.</p>
   */
  activeAgents: number | undefined;

  /**
   * <p>Number of healthy discovery agents</p>
   */
  healthyAgents: number | undefined;

  /**
   * <p>Number of blacklisted discovery agents.</p>
   */
  blackListedAgents: number | undefined;

  /**
   * <p>Number of discovery agents with status SHUTDOWN.</p>
   */
  shutdownAgents: number | undefined;

  /**
   * <p>Number of unhealthy discovery agents.</p>
   */
  unhealthyAgents: number | undefined;

  /**
   * <p>Total number of discovery agents.</p>
   */
  totalAgents: number | undefined;

  /**
   * <p>Number of unknown discovery agents.</p>
   */
  unknownAgents: number | undefined;
}

/**
 * <p>Inventory data for installed discovery connectors.</p>
 */
export interface CustomerConnectorInfo {
  /**
   * <p>Number of active discovery connectors.</p>
   */
  activeConnectors: number | undefined;

  /**
   * <p>Number of healthy discovery connectors.</p>
   */
  healthyConnectors: number | undefined;

  /**
   * <p>Number of blacklisted discovery connectors.</p>
   */
  blackListedConnectors: number | undefined;

  /**
   * <p>Number of discovery connectors with status SHUTDOWN,</p>
   */
  shutdownConnectors: number | undefined;

  /**
   * <p>Number of unhealthy discovery connectors.</p>
   */
  unhealthyConnectors: number | undefined;

  /**
   * <p>Total number of discovery connectors.</p>
   */
  totalConnectors: number | undefined;

  /**
   * <p>Number of unknown discovery connectors.</p>
   */
  unknownConnectors: number | undefined;
}

/**
 * <p>
 *       The inventory data for installed Migration Evaluator collectors.
 *     </p>
 */
export interface CustomerMeCollectorInfo {
  /**
   * <p>
   *       The number of active Migration Evaluator collectors.
   *     </p>
   */
  activeMeCollectors: number | undefined;

  /**
   * <p>
   *       The number of healthy Migration Evaluator collectors.
   *     </p>
   */
  healthyMeCollectors: number | undefined;

  /**
   * <p>
   *       The number of deny-listed Migration Evaluator collectors.
   *     </p>
   */
  denyListedMeCollectors: number | undefined;

  /**
   * <p>
   *       The number of Migration Evaluator collectors with <code>SHUTDOWN</code> status.
   *     </p>
   */
  shutdownMeCollectors: number | undefined;

  /**
   * <p>
   *       The number of unhealthy Migration Evaluator collectors.
   *     </p>
   */
  unhealthyMeCollectors: number | undefined;

  /**
   * <p>
   *       The total number of Migration Evaluator collectors.
   *     </p>
   */
  totalMeCollectors: number | undefined;

  /**
   * <p>
   *       The number of unknown Migration Evaluator collectors.
   *     </p>
   */
  unknownMeCollectors: number | undefined;
}

export interface GetDiscoverySummaryResponse {
  /**
   * <p>The number of servers discovered.</p>
   */
  servers?: number;

  /**
   * <p>The number of applications discovered.</p>
   */
  applications?: number;

  /**
   * <p>The number of servers mapped to applications.</p>
   */
  serversMappedToApplications?: number;

  /**
   * <p>The number of servers mapped to tags.</p>
   */
  serversMappedtoTags?: number;

  /**
   * <p>Details about discovered agents, including agent status and health.</p>
   */
  agentSummary?: CustomerAgentInfo;

  /**
   * <p>Details about discovered connectors, including connector status and health.</p>
   */
  connectorSummary?: CustomerConnectorInfo;

  /**
   * <p>
   *       Details about Migration Evaluator collectors, including collector status and health.
   *     </p>
   */
  meCollectorSummary?: CustomerMeCollectorInfo;

  agentlessCollectorSummary?: CustomerAgentlessCollectorInfo;
}

export enum OrderString {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>A field and direction for ordered output.</p>
 */
export interface OrderByElement {
  /**
   * <p>The field on which to order.</p>
   */
  fieldName: string | undefined;

  /**
   * <p>Ordering direction.</p>
   */
  sortOrder?: OrderString | string;
}

export interface ListConfigurationsRequest {
  /**
   * <p>A valid configuration identified by Application Discovery Service. </p>
   */
  configurationType: ConfigurationItemType | string | undefined;

  /**
   * <p>You can filter the request using various logical operators and a
   *         <i>key</i>-<i>value</i> format. For example: </p>
   *          <p>
   *             <code>{"key": "serverType", "value": "webServer"}</code>
   *          </p>
   *          <p>For a complete list of filter options and guidance about using them with this action,
   *       see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery
   *         Service User Guide</i>.</p>
   */
  filters?: Filter[];

  /**
   * <p>The total number of items to return. The maximum value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if a previous call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * <p>Certain filter criteria return output that can be sorted in ascending or descending
   *       order. For a list of output characteristics for each filter, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a> in the <i>Amazon Web Services Application Discovery
   *         Service User Guide</i>.</p>
   */
  orderBy?: OrderByElement[];
}

export interface ListConfigurationsResponse {
  /**
   * <p>Returns configuration details, including the configuration ID, attribute names, and
   *       attribute values.</p>
   */
  configurations?: Record<string, string>[];

  /**
   * <p>Token to retrieve the next set of results. For example, if your call to
   *       ListConfigurations returned 100 items, but you set
   *         <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   */
  nextToken?: string;
}

export interface ListServerNeighborsRequest {
  /**
   * <p>Configuration ID of the server for which neighbors are being listed.</p>
   */
  configurationId: string | undefined;

  /**
   * <p>Flag to indicate if port and protocol information is needed as part of the
   *       response.</p>
   */
  portInformationNeeded?: boolean;

  /**
   * <p>List of configuration IDs to test for one-hop-away.</p>
   */
  neighborConfigurationIds?: string[];

  /**
   * <p>Maximum number of results to return in a single page of output.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100
   *       IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;
}

/**
 * <p>Details about neighboring servers.</p>
 */
export interface NeighborConnectionDetail {
  /**
   * <p>The ID of the server that opened the network connection.</p>
   */
  sourceServerId: string | undefined;

  /**
   * <p>The ID of the server that accepted the network connection.</p>
   */
  destinationServerId: string | undefined;

  /**
   * <p>The destination network port for the connection.</p>
   */
  destinationPort?: number;

  /**
   * <p>The network protocol used for the connection.</p>
   */
  transportProtocol?: string;

  /**
   * <p>The number of open network connections with the neighboring server.</p>
   */
  connectionsCount: number | undefined;
}

export interface ListServerNeighborsResponse {
  /**
   * <p>List of distinct servers that are one hop away from the given server.</p>
   */
  neighbors: NeighborConnectionDetail[] | undefined;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for
   *         <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set
   *         <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results
   *       along with this token. Use this token in the next query to retrieve the next set of
   *       10.</p>
   */
  nextToken?: string;

  /**
   * <p>Count of distinct servers that are one hop away from the given server.</p>
   */
  knownDependencyCount?: number;
}

/**
 * <p></p>
 */
export class ConflictErrorException extends __BaseException {
  readonly name: "ConflictErrorException" = "ConflictErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictErrorException, __BaseException>) {
    super({
      name: "ConflictErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictErrorException.prototype);
  }
}

/**
 * <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

export interface StartContinuousExportRequest {}

export interface StartContinuousExportResponse {
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId?: string;

  /**
   * <p>The name of the s3 bucket where the export data parquet files are stored.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The timestamp representing when the continuous export was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The type of data collector used to gather this data (currently only offered for
   *       AGENT).</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>A dictionary which describes how the data is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>databaseName</code> - the name of the Glue database used to store the
   *           schema.</p>
   *             </li>
   *          </ul>
   */
  schemaStorageConfig?: Record<string, string>;
}

export interface StartDataCollectionByAgentIdsRequest {
  /**
   * <p>The IDs of the agents or connectors from which to start collecting data. If you send a
   *       request to an agent/connector ID that you do not have permission to contact, according to your
   *       Amazon Web Services account, the service does not throw an exception. Instead, it returns the error in the
   *         <i>Description</i> field. If you send a request to multiple agents/connectors
   *       and you do not have permission to contact some of those agents/connectors, the system does not
   *       throw an exception. Instead, the system shows <code>Failed</code> in the
   *         <i>Description</i> field.</p>
   */
  agentIds: string[] | undefined;
}

export interface StartDataCollectionByAgentIdsResponse {
  /**
   * <p>Information about agents or the connector that were instructed to start collecting
   *       data. Information includes the agent/connector ID, a description of the operation performed,
   *       and whether the agent/connector configuration was updated.</p>
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}

export enum ExportDataFormat {
  CSV = "CSV",
  GRAPHML = "GRAPHML",
}

export interface StartExportTaskRequest {
  /**
   * <p>The file format for the returned export data. Default value is <code>CSV</code>.
   *         <b>Note:</b>
   *             <i>The</i>
   *             <code>GRAPHML</code>
   *             <i>option has been deprecated.</i>
   *          </p>
   */
  exportDataFormat?: (ExportDataFormat | string)[];

  /**
   * <p>If a filter is present, it selects the single <code>agentId</code> of the Application
   *       Discovery Agent for which data is exported. The <code>agentId</code> can be found in the
   *       results of the <code>DescribeAgents</code> API or CLI. If no filter is present,
   *         <code>startTime</code> and <code>endTime</code> are ignored and exported data includes both
   *       Agentless Discovery Connector data and summary data from Application Discovery agents.
   *     </p>
   */
  filters?: ExportFilter[];

  /**
   * <p>The start timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, data is exported starting from the first
   *       data collected by the agent.</p>
   */
  startTime?: Date;

  /**
   * <p>The end timestamp for exported data from the single Application Discovery Agent
   *       selected in the filters. If no value is specified, exported data includes the most recent data
   *       collected by the agent.</p>
   */
  endTime?: Date;
}

export interface StartExportTaskResponse {
  /**
   * <p>A unique identifier used to query the status of an export request.</p>
   */
  exportId?: string;
}

export interface StartImportTaskRequest {
  /**
   * <p>Optional. A unique token that you can provide to prevent the same import request from
   *       occurring more than once. If you don't provide a token, a token is automatically
   *       generated.</p>
   *
   *          <p>Sending more than one <code>StartImportTask</code> request with the same client request
   *       token will return information about the original import task with that client request
   *       token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A descriptive name for this request. You can use this name to filter future requests
   *       related to this import task, such as identifying applications and servers that were included
   *       in this import task. We recommend that you use a meaningful name for each import task.</p>
   */
  name: string | undefined;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   *
   *          <note>
   *             <p>If you're using the Amazon Web Services CLI, this URL is structured as follows:
   *           <code>s3://BucketName/ImportFileName.CSV</code>
   *             </p>
   *          </note>
   */
  importUrl: string | undefined;
}

export interface StartImportTaskResponse {
  /**
   * <p>An array of information related to the import task request including status information,
   *       times, IDs, the Amazon S3 Object URL for the import file, and more. </p>
   */
  task?: ImportTask;
}

export interface StopContinuousExportRequest {
  /**
   * <p>The unique ID assigned to this export.</p>
   */
  exportId: string | undefined;
}

export interface StopContinuousExportResponse {
  /**
   * <p>Timestamp that represents when this continuous export started collecting
   *       data.</p>
   */
  startTime?: Date;

  /**
   * <p>Timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;
}

export interface StopDataCollectionByAgentIdsRequest {
  /**
   * <p>The IDs of the agents or connectors from which to stop collecting data.</p>
   */
  agentIds: string[] | undefined;
}

export interface StopDataCollectionByAgentIdsResponse {
  /**
   * <p>Information about the agents or connector that were instructed to stop collecting data.
   *       Information includes the agent/connector ID, a description of the operation performed, and
   *       whether the agent/connector configuration was updated.</p>
   */
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}

export interface UpdateApplicationRequest {
  /**
   * <p>Configuration ID of the application to be updated.</p>
   */
  configurationId: string | undefined;

  /**
   * <p>New name of the application to be updated.</p>
   */
  name?: string;

  /**
   * <p>New description of the application to be updated.</p>
   */
  description?: string;
}

export interface UpdateApplicationResponse {}

/**
 * @internal
 */
export const AgentConfigurationStatusFilterSensitiveLog = (obj: AgentConfigurationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentNetworkInfoFilterSensitiveLog = (obj: AgentNetworkInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentInfoFilterSensitiveLog = (obj: AgentInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConfigurationItemsToApplicationRequestFilterSensitiveLog = (
  obj: AssociateConfigurationItemsToApplicationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConfigurationItemsToApplicationResponseFilterSensitiveLog = (
  obj: AssociateConfigurationItemsToApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteImportDataRequestFilterSensitiveLog = (obj: BatchDeleteImportDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteImportDataErrorFilterSensitiveLog = (obj: BatchDeleteImportDataError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteImportDataResponseFilterSensitiveLog = (obj: BatchDeleteImportDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTagsRequestFilterSensitiveLog = (obj: CreateTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTagsResponseFilterSensitiveLog = (obj: CreateTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationsRequestFilterSensitiveLog = (obj: DeleteApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationsResponseFilterSensitiveLog = (obj: DeleteApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsRequestFilterSensitiveLog = (obj: DeleteTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsResponseFilterSensitiveLog = (obj: DeleteTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentsRequestFilterSensitiveLog = (obj: DescribeAgentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentsResponseFilterSensitiveLog = (obj: DescribeAgentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationsRequestFilterSensitiveLog = (obj: DescribeConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationsResponseFilterSensitiveLog = (obj: DescribeConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContinuousExportsRequestFilterSensitiveLog = (obj: DescribeContinuousExportsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousExportDescriptionFilterSensitiveLog = (obj: ContinuousExportDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContinuousExportsResponseFilterSensitiveLog = (obj: DescribeContinuousExportsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportConfigurationsRequestFilterSensitiveLog = (
  obj: DescribeExportConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportInfoFilterSensitiveLog = (obj: ExportInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportConfigurationsResponseFilterSensitiveLog = (
  obj: DescribeExportConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportFilterFilterSensitiveLog = (obj: ExportFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksRequestFilterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksResponseFilterSensitiveLog = (obj: DescribeExportTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportTaskFilterFilterSensitiveLog = (obj: ImportTaskFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportTasksRequestFilterSensitiveLog = (obj: DescribeImportTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportTaskFilterSensitiveLog = (obj: ImportTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportTasksResponseFilterSensitiveLog = (obj: DescribeImportTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterFilterSensitiveLog = (obj: TagFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsRequestFilterSensitiveLog = (obj: DescribeTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationTagFilterSensitiveLog = (obj: ConfigurationTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsResponseFilterSensitiveLog = (obj: DescribeTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConfigurationItemsFromApplicationRequestFilterSensitiveLog = (
  obj: DisassociateConfigurationItemsFromApplicationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConfigurationItemsFromApplicationResponseFilterSensitiveLog = (
  obj: DisassociateConfigurationItemsFromApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportConfigurationsResponseFilterSensitiveLog = (obj: ExportConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDiscoverySummaryRequestFilterSensitiveLog = (obj: GetDiscoverySummaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerAgentlessCollectorInfoFilterSensitiveLog = (obj: CustomerAgentlessCollectorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerAgentInfoFilterSensitiveLog = (obj: CustomerAgentInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerConnectorInfoFilterSensitiveLog = (obj: CustomerConnectorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerMeCollectorInfoFilterSensitiveLog = (obj: CustomerMeCollectorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDiscoverySummaryResponseFilterSensitiveLog = (obj: GetDiscoverySummaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderByElementFilterSensitiveLog = (obj: OrderByElement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationsRequestFilterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationsResponseFilterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServerNeighborsRequestFilterSensitiveLog = (obj: ListServerNeighborsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NeighborConnectionDetailFilterSensitiveLog = (obj: NeighborConnectionDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServerNeighborsResponseFilterSensitiveLog = (obj: ListServerNeighborsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContinuousExportRequestFilterSensitiveLog = (obj: StartContinuousExportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContinuousExportResponseFilterSensitiveLog = (obj: StartContinuousExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataCollectionByAgentIdsRequestFilterSensitiveLog = (
  obj: StartDataCollectionByAgentIdsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataCollectionByAgentIdsResponseFilterSensitiveLog = (
  obj: StartDataCollectionByAgentIdsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExportTaskRequestFilterSensitiveLog = (obj: StartExportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExportTaskResponseFilterSensitiveLog = (obj: StartExportTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportTaskRequestFilterSensitiveLog = (obj: StartImportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportTaskResponseFilterSensitiveLog = (obj: StartImportTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContinuousExportRequestFilterSensitiveLog = (obj: StopContinuousExportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContinuousExportResponseFilterSensitiveLog = (obj: StopContinuousExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopDataCollectionByAgentIdsRequestFilterSensitiveLog = (
  obj: StopDataCollectionByAgentIdsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopDataCollectionByAgentIdsResponseFilterSensitiveLog = (
  obj: StopDataCollectionByAgentIdsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
});
