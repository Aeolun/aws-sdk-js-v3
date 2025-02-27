// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { MgnServiceException as __BaseException } from "./MgnServiceException";

/**
 * <p>Operating denied due to a file permission or access check error.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.code = opts.code;
  }
}

export interface InitializeServiceRequest {}

export interface InitializeServiceResponse {}

/**
 * <p>Validate exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   */
  message?: string;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>Validate exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Validate exception reason.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Validate exception field list.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.code = opts.code;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>Error details.</p>
 */
export interface ErrorDetails {
  /**
   * <p>Error details message.</p>
   */
  message?: string;

  /**
   * <p>Error details code.</p>
   */
  code?: string;

  /**
   * <p>Error details resourceId.</p>
   */
  resourceId?: string;

  /**
   * <p>Error details resourceType.</p>
   */
  resourceType?: string;
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>A conflict occurred when prompting for resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>Conflict Exception specific errors.</p>
   */
  errors?: ErrorDetails[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.errors = opts.errors;
  }
}

export interface DeleteJobRequest {
  /**
   * <p>Request to delete Job from service by Job ID.</p>
   */
  jobID: string | undefined;
}

export interface DeleteJobResponse {}

/**
 * <p>Resource not found exception.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Resource ID not found error.</p>
   */
  resourceId?: string;

  /**
   * <p>Resource type not found error.</p>
   */
  resourceType?: string;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Uninitialized account exception.</p>
 */
export class UninitializedAccountException extends __BaseException {
  readonly name: "UninitializedAccountException" = "UninitializedAccountException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UninitializedAccountException, __BaseException>) {
    super({
      name: "UninitializedAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UninitializedAccountException.prototype);
    this.code = opts.code;
  }
}

export interface DescribeJobLogItemsRequest {
  /**
   * <p>Request to describe Job log job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>Request to describe Job log item maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Job log next token.</p>
   */
  nextToken?: string;
}

export enum JobLogEvent {
  CLEANUP_END = "CLEANUP_END",
  CLEANUP_FAIL = "CLEANUP_FAIL",
  CLEANUP_START = "CLEANUP_START",
  CONVERSION_END = "CONVERSION_END",
  CONVERSION_FAIL = "CONVERSION_FAIL",
  CONVERSION_START = "CONVERSION_START",
  JOB_CANCEL = "JOB_CANCEL",
  JOB_END = "JOB_END",
  JOB_START = "JOB_START",
  LAUNCH_FAILED = "LAUNCH_FAILED",
  LAUNCH_START = "LAUNCH_START",
  SERVER_SKIPPED = "SERVER_SKIPPED",
  SNAPSHOT_END = "SNAPSHOT_END",
  SNAPSHOT_FAIL = "SNAPSHOT_FAIL",
  SNAPSHOT_START = "SNAPSHOT_START",
  USING_PREVIOUS_SNAPSHOT = "USING_PREVIOUS_SNAPSHOT",
}

/**
 * <p>Job log data</p>
 */
export interface JobLogEventData {
  /**
   * <p>Job Event Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Job Event conversion Server ID.</p>
   */
  conversionServerID?: string;

  /**
   * <p>Job Event Target instance ID.</p>
   */
  targetInstanceID?: string;

  /**
   * <p>Job error.</p>
   */
  rawError?: string;
}

/**
 * <p>Job log.</p>
 */
export interface JobLog {
  /**
   * <p>Job log event date and time.</p>
   */
  logDateTime?: string;

  /**
   * <p>Job log event.</p>
   */
  event?: JobLogEvent | string;

  /**
   * <p>Job event data</p>
   */
  eventData?: JobLogEventData;
}

export interface DescribeJobLogItemsResponse {
  /**
   * <p>Request to describe Job log response items.</p>
   */
  items?: JobLog[];

  /**
   * <p>Request to describe Job log response next token.</p>
   */
  nextToken?: string;
}

/**
 * <p>Request to describe Job log filters.</p>
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>Request to describe Job log filters by job ID.</p>
   */
  jobIDs?: string[];

  /**
   * <p>Request to describe Job log filters by date.</p>
   */
  fromDate?: string;

  /**
   * <p>Request to describe job log items by last date.</p>
   */
  toDate?: string;
}

export interface DescribeJobsRequest {
  /**
   * <p>Request to describe Job log filters.</p>
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * <p>Request to describe job log items by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe job log items by next token.</p>
   */
  nextToken?: string;
}

export enum InitiatedBy {
  DIAGNOSTIC = "DIAGNOSTIC",
  START_CUTOVER = "START_CUTOVER",
  START_TEST = "START_TEST",
  TERMINATE = "TERMINATE",
}

export enum LaunchStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  LAUNCHED = "LAUNCHED",
  PENDING = "PENDING",
  TERMINATED = "TERMINATED",
}

export enum PostLaunchActionExecutionStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export enum SsmParameterStoreParameterType {
  STRING = "STRING",
}

/**
 * <p>Source server replication type.</p>
 */
export interface SsmParameterStoreParameter {
  /**
   * <p>Source server replication type.</p>
   */
  parameterType: SsmParameterStoreParameterType | string | undefined;

  /**
   * <p>Source server replication type.</p>
   */
  parameterName: string | undefined;
}

/**
 * <p>Source server replication type.</p>
 */
export interface SsmDocument {
  /**
   * <p>Source server replication type.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Source server replication type.</p>
   */
  ssmDocumentName: string | undefined;

  /**
   * <p>Source server replication type.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>Source server replication type.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Source server replication type.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;
}

export enum SsmDocumentType {
  AUTOMATION = "AUTOMATION",
  COMMAND = "COMMAND",
}

/**
 * <p>Job type.</p>
 */
export interface JobPostLaunchActionsLaunchStatus {
  /**
   * <p>Job type.</p>
   */
  ssmDocument?: SsmDocument;

  /**
   * <p>Job type.</p>
   */
  ssmDocumentType?: SsmDocumentType | string;

  /**
   * <p>Job type.</p>
   */
  executionID?: string;

  /**
   * <p>Job type.</p>
   */
  executionStatus?: PostLaunchActionExecutionStatus | string;

  /**
   * <p>Job type.</p>
   */
  failureReason?: string;
}

/**
 * <p>Server participating in Job.</p>
 */
export interface PostLaunchActionsStatus {
  /**
   * <p>Server participating in Job.</p>
   */
  ssmAgentDiscoveryDatetime?: string;

  /**
   * <p>Server participating in Job.</p>
   */
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[];
}

/**
 * <p>Server participating in Job.</p>
 */
export interface ParticipatingServer {
  /**
   * <p>Participating server Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Participating server launch status.</p>
   */
  launchStatus?: LaunchStatus | string;

  /**
   * <p>Participating server Source Server ID.</p>
   */
  launchedEc2InstanceID?: string;

  /**
   * <p>Participating server Source Server ID.</p>
   */
  postLaunchActionsStatus?: PostLaunchActionsStatus;
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  STARTED = "STARTED",
}

export enum JobType {
  LAUNCH = "LAUNCH",
  TERMINATE = "TERMINATE",
}

/**
 * <p>Job.</p>
 */
export interface Job {
  /**
   * <p>Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>the ARN of the specific Job.</p>
   */
  arn?: string;

  /**
   * <p>Job type.</p>
   */
  type?: JobType | string;

  /**
   * <p>Job initiated by field.</p>
   */
  initiatedBy?: InitiatedBy | string;

  /**
   * <p>Job creation time.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Job end time.</p>
   */
  endDateTime?: string;

  /**
   * <p>Job status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Servers participating in a specific Job.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>Tags associated with specific Job.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeJobsResponse {
  /**
   * <p>Request to describe Job log items.</p>
   */
  items?: Job[];

  /**
   * <p>Request to describe Job response by next token.</p>
   */
  nextToken?: string;
}

export enum PostLaunchActionsDeploymentType {
  CUTOVER_ONLY = "CUTOVER_ONLY",
  TEST_AND_CUTOVER = "TEST_AND_CUTOVER",
}

/**
 * <p>Server participating in Job.</p>
 */
export interface PostLaunchActions {
  /**
   * <p>Server participating in Job.</p>
   */
  deployment?: PostLaunchActionsDeploymentType | string;

  /**
   * <p>Server participating in Job.</p>
   */
  s3LogBucket?: string;

  /**
   * <p>Server participating in Job.</p>
   */
  s3OutputKeyPrefix?: string;

  /**
   * <p>Server participating in Job.</p>
   */
  cloudWatchLogGroupName?: string;

  /**
   * <p>Server participating in Job.</p>
   */
  ssmDocuments?: SsmDocument[];
}

export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  tags?: Record<string, string>;
}

export interface LaunchConfigurationTemplate {
  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  arn?: string;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  tags?: Record<string, string>;
}

export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   */
  launchConfigurationTemplateID: string | undefined;
}

export interface DeleteLaunchConfigurationTemplateResponse {}

export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  nextToken?: string;
}

export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  nextToken?: string;
}

export interface UpdateLaunchConfigurationTemplateRequest {
  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  postLaunchActions?: PostLaunchActions;
}

/**
 * <p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

export interface ListTagsForResourceRequest {
  /**
   * <p>List tags for resource request by ARN.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>List tags for resource response.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Reached throttling quota exception.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reached throttling quota exception service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Reached throttling quota exception.</p>
   */
  quotaCode?: string;

  /**
   * <p>Reached throttling quota exception will retry after x seconds.</p>
   */
  retryAfterSeconds?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

export enum ReplicationConfigurationDataPlaneRouting {
  PRIVATE_IP = "PRIVATE_IP",
  PUBLIC_IP = "PUBLIC_IP",
}

export enum ReplicationConfigurationDefaultLargeStagingDiskType {
  GP2 = "GP2",
  GP3 = "GP3",
  ST1 = "ST1",
}

export enum ReplicationConfigurationEbsEncryption {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
}

export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to configure the Staging Area subnet ID during Replication Settings template creation.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>Request to configure the Replication Server Security group ID during Replication Settings template creation.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>Request to configure the default large staging disk EBS volume type during Replication Settings template creation.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | string | undefined;

  /**
   * <p>Request to configure EBS encryption during Replication Settings template creation.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | string | undefined;

  /**
   * <p>Request to configure an EBS encryption key during Replication Settings template creation.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | string | undefined;

  /**
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>Request to configure Staging Area tags during Replication Settings template creation.</p>
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>Request to configure tags during Replication Settings template creation.</p>
   */
  tags?: Record<string, string>;
}

export interface ReplicationConfigurationTemplate {
  /**
   * <p>Replication Configuration template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Replication Configuration template ARN.</p>
   */
  arn?: string;

  /**
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration template server Security Groups IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration template server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration template use default large Staging Disk type.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration template EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration template bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration template data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration template create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration template Staging Area Tags.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Replication Configuration template Tags.</p>
   */
  tags?: Record<string, string>;
}

export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to delete Replication Configuration Template from service by Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;
}

export interface DeleteReplicationConfigurationTemplateResponse {}

export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>Request to describe Replication Configuration template by template IDs.</p>
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * <p>Request to describe Replication Configuration template by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>Request to describe Replication Configuration template by items.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>Update replication configuration template template ID request.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Update replication configuration template ARN request.</p>
   */
  arn?: string;

  /**
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration template Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration template EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration template bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration template data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration template create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration template Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;
}

export enum ChangeServerLifeCycleStateSourceServerLifecycleState {
  CUTOVER = "CUTOVER",
  READY_FOR_CUTOVER = "READY_FOR_CUTOVER",
  READY_FOR_TEST = "READY_FOR_TEST",
}

/**
 * <p>The request to change the source server migration lifecycle state.</p>
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | string | undefined;
}

export interface ChangeServerLifeCycleStateRequest {
  /**
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;
}

export enum DataReplicationErrorString {
  AGENT_NOT_SEEN = "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS = "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE = "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER = "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP = "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS = "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER = "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER = "FAILED_TO_START_DATA_TRANSFER",
  LAST_SNAPSHOT_JOB_FAILED = "LAST_SNAPSHOT_JOB_FAILED",
  NOT_CONVERGING = "NOT_CONVERGING",
  SNAPSHOTS_FAILURE = "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK = "UNSTABLE_NETWORK",
  UNSUPPORTED_VM_CONFIGURATION = "UNSUPPORTED_VM_CONFIGURATION",
}

/**
 * <p>Error in data replication.</p>
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString | string;

  /**
   * <p>Error in data replication.</p>
   */
  rawError?: string;
}

export enum DataReplicationInitiationStepName {
  ATTACH_STAGING_DISKS = "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE = "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER = "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER = "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP = "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS = "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE = "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER = "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT = "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER = "START_DATA_TRANSFER",
  WAIT = "WAIT",
}

export enum DataReplicationInitiationStepStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SKIPPED = "SKIPPED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Data replication initiation step.</p>
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>Request to query data initiation step name.</p>
   */
  name?: DataReplicationInitiationStepName | string;

  /**
   * <p>Request to query data initiation status.</p>
   */
  status?: DataReplicationInitiationStepStatus | string;
}

/**
 * <p>Data replication initiation.</p>
 */
export interface DataReplicationInitiation {
  /**
   * <p>Request to query data initiation start date and time.</p>
   */
  startDateTime?: string;

  /**
   * <p>Request to query next data initiation date and time.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * <p>Request to query data initiation steps.</p>
   */
  steps?: DataReplicationInitiationStep[];
}

export enum DataReplicationState {
  BACKLOG = "BACKLOG",
  CONTINUOUS = "CONTINUOUS",
  CREATING_SNAPSHOT = "CREATING_SNAPSHOT",
  DISCONNECTED = "DISCONNECTED",
  INITIAL_SYNC = "INITIAL_SYNC",
  INITIATING = "INITIATING",
  PAUSED = "PAUSED",
  PENDING_SNAPSHOT_SHIPPING = "PENDING_SNAPSHOT_SHIPPING",
  RESCAN = "RESCAN",
  SHIPPING_SNAPSHOT = "SHIPPING_SNAPSHOT",
  STALLED = "STALLED",
  STOPPED = "STOPPED",
}

/**
 * <p>Request to query disks replicated.</p>
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>Request to query device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Request to query total amount of data replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * <p>Request to query amount of data replicated in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * <p>Request to query amount of data rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * <p>Request to query data replication backlog size in bytes.</p>
   */
  backloggedStorageBytes?: number;
}

/**
 * <p>Request data replication info.</p>
 */
export interface DataReplicationInfo {
  /**
   * <p>Request to query data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * <p>Request to query the time when data replication will be complete.</p>
   */
  etaDateTime?: string;

  /**
   * <p>Request to query disks replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>Request to query the data replication state.</p>
   */
  dataReplicationState?: DataReplicationState | string;

  /**
   * <p>Request to query whether data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in obtaining data replication info.</p>
   */
  dataReplicationError?: DataReplicationError;

  /**
   * <p>Request to query data replication last snapshot time.</p>
   */
  lastSnapshotDateTime?: string;
}

export enum FirstBoot {
  STOPPED = "STOPPED",
  SUCCEEDED = "SUCCEEDED",
  UNKNOWN = "UNKNOWN",
  WAITING = "WAITING",
}

/**
 * <p>Launched instance.</p>
 */
export interface LaunchedInstance {
  /**
   * <p>Launched instance EC2 ID.</p>
   */
  ec2InstanceID?: string;

  /**
   * <p>Launched instance Job ID.</p>
   */
  jobID?: string;

  /**
   * <p>Launched instance first boot.</p>
   */
  firstBoot?: FirstBoot | string;
}

/**
 * <p>Lifecycle Cutover finalized</p>
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Cutover initiated.</p>
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * <p/>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Cutover initiated by Job ID.</p>
   */
  jobID?: string;
}

/**
 * <p>Lifecycle last Cutover reverted.</p>
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * <p>Lifecycle last Cutover reverted API call date time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Cutover .</p>
 */
export interface LifeCycleLastCutover {
  /**
   * <p>Lifecycle last Cutover initiated.</p>
   */
  initiated?: LifeCycleLastCutoverInitiated;

  /**
   * <p>Lifecycle last Cutover reverted.</p>
   */
  reverted?: LifeCycleLastCutoverReverted;

  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  finalized?: LifeCycleLastCutoverFinalized;
}

/**
 * <p>Lifecycle last Test finalized.</p>
 */
export interface LifeCycleLastTestFinalized {
  /**
   * <p>Lifecycle Test failed API call date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Test initiated.</p>
 */
export interface LifeCycleLastTestInitiated {
  /**
   * <p>Lifecycle last Test initiated API call date and time.</p>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Test initiated Job ID.</p>
   */
  jobID?: string;
}

/**
 * <p>Lifecycle last Test reverted.</p>
 */
export interface LifeCycleLastTestReverted {
  /**
   * <p>Lifecycle last Test reverted API call date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Test.</p>
 */
export interface LifeCycleLastTest {
  /**
   * <p>Lifecycle last Test initiated.</p>
   */
  initiated?: LifeCycleLastTestInitiated;

  /**
   * <p>Lifecycle last Test reverted.</p>
   */
  reverted?: LifeCycleLastTestReverted;

  /**
   * <p>Lifecycle last Test finalized.</p>
   */
  finalized?: LifeCycleLastTestFinalized;
}

export enum LifeCycleState {
  CUTOVER = "CUTOVER",
  CUTTING_OVER = "CUTTING_OVER",
  DISCONNECTED = "DISCONNECTED",
  DISCOVERED = "DISCOVERED",
  NOT_READY = "NOT_READY",
  READY_FOR_CUTOVER = "READY_FOR_CUTOVER",
  READY_FOR_TEST = "READY_FOR_TEST",
  STOPPED = "STOPPED",
  TESTING = "TESTING",
}

/**
 * <p>Lifecycle.</p>
 */
export interface LifeCycle {
  /**
   * <p>Lifecycle added to service data and time.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * <p>Lifecycle replication initiation date and time.</p>
   */
  firstByteDateTime?: string;

  /**
   * <p>Lifecycle elapsed time and duration.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>Lifecycle last seen date and time.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>Lifecycle last Test.</p>
   */
  lastTest?: LifeCycleLastTest;

  /**
   * <p>Lifecycle last Cutover.</p>
   */
  lastCutover?: LifeCycleLastCutover;

  /**
   * <p>Lifecycle state.</p>
   */
  state?: LifeCycleState | string;
}

export enum ReplicationType {
  AGENT_BASED = "AGENT_BASED",
  SNAPSHOT_SHIPPING = "SNAPSHOT_SHIPPING",
}

/**
 * <p>Source server CPU information.</p>
 */
export interface CPU {
  /**
   * <p>The number of CPU cores on the source server.</p>
   */
  cores?: number;

  /**
   * <p>The source server's CPU model name.</p>
   */
  modelName?: string;
}

/**
 * <p>The disk identifier.</p>
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;
}

/**
 * <p>Identification hints.</p>
 */
export interface IdentificationHints {
  /**
   * <p>FQDN address identification hint.</p>
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * <p>vmWare UUID identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   */
  awsInstanceID?: string;

  /**
   * <p>vCenter VM path identification hint.</p>
   */
  vmPath?: string;
}

/**
 * <p>Network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>Network interface Mac address.</p>
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * <p>Network interface primary IP.</p>
   */
  isPrimary?: boolean;
}

/**
 * <p>Operating System.</p>
 */
export interface OS {
  /**
   * <p>OS full string.</p>
   */
  fullString?: string;
}

/**
 * <p>Source server properties.</p>
 */
export interface SourceProperties {
  /**
   * <p>Source server last update date and time.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Source server recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>Source server identification hints.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>Source server network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>Source Server disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>Source Server CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * <p>Source server RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * <p>Source server OS.</p>
   */
  os?: OS;
}

export interface SourceServer {
  /**
   * <p>Source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Source server ARN.</p>
   */
  arn?: string;

  /**
   * <p>Source server archived status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Source server Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Source server launched instance.</p>
   */
  launchedInstance?: LaunchedInstance;

  /**
   * <p>Source server data replication info.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>Source server lifecycle state.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>Source server properties.</p>
   */
  sourceProperties?: SourceProperties;

  /**
   * <p>Source server replication type.</p>
   */
  replicationType?: ReplicationType | string;

  /**
   * <p>Source server vCenter client id.</p>
   */
  vcenterClientID?: string;
}

export interface DeleteSourceServerRequest {
  /**
   * <p>Request to delete Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export interface DeleteSourceServerResponse {}

/**
 * <p>Request to filter Source Servers list.</p>
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   */
  sourceServerIDs?: string[];

  /**
   * <p>Request to filter Source Servers list by archived.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Request to filter Source Servers list by replication type.</p>
   */
  replicationTypes?: (ReplicationType | string)[];

  /**
   * <p>Request to filter Source Servers list by life cycle states.</p>
   */
  lifeCycleStates?: (LifeCycleState | string)[];
}

export interface DescribeSourceServersRequest {
  /**
   * <p>Request to filter Source Servers list.</p>
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * <p>Request to filter Source Servers list by maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to filter Source Servers list by next token.</p>
   */
  nextToken?: string;
}

export interface DescribeSourceServersResponse {
  /**
   * <p>Request to filter Source Servers list by item.</p>
   */
  items?: SourceServer[];

  /**
   * <p>Request to filter Source Servers next token.</p>
   */
  nextToken?: string;
}

export interface DisconnectFromServiceRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export interface FinalizeCutoverRequest {
  /**
   * <p>Request to finalize Cutover by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export interface GetLaunchConfigurationRequest {
  /**
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export enum BootMode {
  LEGACY_BIOS = "LEGACY_BIOS",
  UEFI = "UEFI",
}

export enum LaunchDisposition {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

/**
 * <p>Configure Licensing.</p>
 */
export interface Licensing {
  /**
   * <p>Configure BYOL OS licensing.</p>
   */
  osByol?: boolean;
}

export enum TargetInstanceTypeRightSizingMethod {
  BASIC = "BASIC",
  NONE = "NONE",
}

export interface LaunchConfiguration {
  /**
   * <p>Launch configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Launch configuration name.</p>
   */
  name?: string;

  /**
   * <p>Launch configuration EC2 Launch template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Launch disposition for launch configuration.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Launch configuration Target instance type right sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy Tags during Launch Configuration.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Launch configuration OS licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration boot mode.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Server participating in Job.</p>
   */
  postLaunchActions?: PostLaunchActions;
}

export interface GetReplicationConfigurationRequest {
  /**
   * <p>Request to get Replication Configuration by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export enum ReplicationConfigurationReplicatedDiskStagingDiskType {
  AUTO = "AUTO",
  GP2 = "GP2",
  GP3 = "GP3",
  IO1 = "IO1",
  IO2 = "IO2",
  SC1 = "SC1",
  ST1 = "ST1",
  STANDARD = "STANDARD",
}

/**
 * <p>Replication Configuration replicated disk.</p>
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>Replication Configuration replicated disk device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Replication Configuration replicated disk boot disk.</p>
   */
  isBootDisk?: boolean;

  /**
   * <p>Replication Configuration replicated disk staging disk type.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disk IOPs.</p>
   */
  iops?: number;

  /**
   * <p>Replication Configuration replicated disk throughput.</p>
   */
  throughput?: number;
}

export interface ReplicationConfiguration {
  /**
   * <p>Replication Configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Replication Configuration name.</p>
   */
  name?: string;

  /**
   * <p>Replication Configuration Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration Replication Server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration use default large Staging Disks.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disks.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Replication Configuration EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration set bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration Staging Area tags.</p>
   */
  stagingAreaTags?: Record<string, string>;
}

export interface MarkAsArchivedRequest {
  /**
   * <p>Mark as archived by Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export interface RetryDataReplicationRequest {
  /**
   * <p>Retry data replication for Source Server ID.</p>
   */
  sourceServerID: string | undefined;
}

export interface StartCutoverRequest {
  /**
   * <p>Start Cutover by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Cutover by Tags.</p>
   */
  tags?: Record<string, string>;
}

export interface StartCutoverResponse {
  /**
   * <p>Start Cutover Job response.</p>
   */
  job?: Job;
}

/**
 * <p>The request could not be completed because its exceeded the service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Exceeded the service quota resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>Exceeded the service quota resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>Exceeded the service quota service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Exceeded the service quota code.</p>
   */
  quotaCode?: string;

  /**
   * <p>Exceeded the service quota value.</p>
   */
  quotaValue?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.quotaValue = opts.quotaValue;
  }
}

export interface StartReplicationRequest {
  /**
   * <p>ID of source server on which to start replication.</p>
   */
  sourceServerID: string | undefined;
}

export interface StartTestRequest {
  /**
   * <p>Start Test for Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Test by Tags.</p>
   */
  tags?: Record<string, string>;
}

export interface StartTestResponse {
  /**
   * <p>Start Test Job response.</p>
   */
  job?: Job;
}

export interface TerminateTargetInstancesRequest {
  /**
   * <p>Terminate Target instance by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Terminate Target instance by Tags.</p>
   */
  tags?: Record<string, string>;
}

export interface TerminateTargetInstancesResponse {
  /**
   * <p>Terminate Target instance Job response.</p>
   */
  job?: Job;
}

export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>Update Launch configuration by Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Launch configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update Launch configuration launch disposition request.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Update Launch configuration copy Private IP request.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Update Launch configuration copy Tags request.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Update Launch configuration licensing request.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Update Launch configuration boot mode request.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Server participating in Job.</p>
   */
  postLaunchActions?: PostLaunchActions;
}

export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>Update replication configuration Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update replication configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update replication configuration Staging Area subnet request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration replicated disks request.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Update replication configuration EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;
}

export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * <p>ID of source server on which to update replication type.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Replication type to which to update source server.</p>
   */
  replicationType: ReplicationType | string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   */
  tagKeys: string[] | undefined;
}

export interface DeleteVcenterClientRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   */
  vcenterClientID: string | undefined;
}

export interface DescribeVcenterClientsRequest {
  /**
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   */
  maxResults?: number;

  /**
   * <p>Next pagination token to be provided for DescribeVcenterClients.</p>
   */
  nextToken?: string;
}

/**
 * <p>vCenter client.</p>
 */
export interface VcenterClient {
  /**
   * <p>ID of vCenter client.</p>
   */
  vcenterClientID?: string;

  /**
   * <p>Arn of vCenter client.</p>
   */
  arn?: string;

  /**
   * <p>Hostname of vCenter client .</p>
   */
  hostname?: string;

  /**
   * <p>Vcenter UUID of vCenter client.</p>
   */
  vcenterUUID?: string;

  /**
   * <p>Datacenter name of vCenter client.</p>
   */
  datacenterName?: string;

  /**
   * <p>Last seen time of vCenter client.</p>
   */
  lastSeenDatetime?: string;

  /**
   * <p>Tags for Source Server of vCenter client.</p>
   */
  sourceServerTags?: Record<string, string>;

  /**
   * <p>Tags for vCenter client.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeVcenterClientsResponse {
  /**
   * <p>List of items returned by DescribeVcenterClients.</p>
   */
  items?: VcenterClient[];

  /**
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const InitializeServiceRequestFilterSensitiveLog = (obj: InitializeServiceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitializeServiceResponseFilterSensitiveLog = (obj: InitializeServiceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailsFilterSensitiveLog = (obj: ErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobRequestFilterSensitiveLog = (obj: DeleteJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobResponseFilterSensitiveLog = (obj: DeleteJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobLogItemsRequestFilterSensitiveLog = (obj: DescribeJobLogItemsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobLogEventDataFilterSensitiveLog = (obj: JobLogEventData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobLogFilterSensitiveLog = (obj: JobLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobLogItemsResponseFilterSensitiveLog = (obj: DescribeJobLogItemsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsRequestFiltersFilterSensitiveLog = (obj: DescribeJobsRequestFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobsRequestFilterSensitiveLog = (obj: DescribeJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SsmParameterStoreParameterFilterSensitiveLog = (obj: SsmParameterStoreParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SsmDocumentFilterSensitiveLog = (obj: SsmDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobPostLaunchActionsLaunchStatusFilterSensitiveLog = (obj: JobPostLaunchActionsLaunchStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PostLaunchActionsStatusFilterSensitiveLog = (obj: PostLaunchActionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParticipatingServerFilterSensitiveLog = (obj: ParticipatingServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeJobsResponseFilterSensitiveLog = (obj: DescribeJobsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PostLaunchActionsFilterSensitiveLog = (obj: PostLaunchActions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateLaunchConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchConfigurationTemplateFilterSensitiveLog = (obj: LaunchConfigurationTemplate): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteLaunchConfigurationTemplateRequestFilterSensitiveLog = (
  obj: DeleteLaunchConfigurationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchConfigurationTemplateResponseFilterSensitiveLog = (
  obj: DeleteLaunchConfigurationTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLaunchConfigurationTemplatesRequestFilterSensitiveLog = (
  obj: DescribeLaunchConfigurationTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLaunchConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeLaunchConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => LaunchConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateLaunchConfigurationTemplateRequestFilterSensitiveLog = (
  obj: UpdateLaunchConfigurationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ReplicationConfigurationTemplateFilterSensitiveLog = (obj: ReplicationConfigurationTemplate): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: DeleteReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationConfigurationTemplateResponseFilterSensitiveLog = (
  obj: DeleteReplicationConfigurationTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplicationConfigurationTemplatesRequestFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChangeServerLifeCycleStateSourceServerLifecycleFilterSensitiveLog = (
  obj: ChangeServerLifeCycleStateSourceServerLifecycle
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeServerLifeCycleStateRequestFilterSensitiveLog = (obj: ChangeServerLifeCycleStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationErrorFilterSensitiveLog = (obj: DataReplicationError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInitiationStepFilterSensitiveLog = (obj: DataReplicationInitiationStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInitiationFilterSensitiveLog = (obj: DataReplicationInitiation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInfoReplicatedDiskFilterSensitiveLog = (obj: DataReplicationInfoReplicatedDisk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataReplicationInfoFilterSensitiveLog = (obj: DataReplicationInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchedInstanceFilterSensitiveLog = (obj: LaunchedInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastCutoverFinalizedFilterSensitiveLog = (obj: LifeCycleLastCutoverFinalized): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastCutoverInitiatedFilterSensitiveLog = (obj: LifeCycleLastCutoverInitiated): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastCutoverRevertedFilterSensitiveLog = (obj: LifeCycleLastCutoverReverted): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastCutoverFilterSensitiveLog = (obj: LifeCycleLastCutover): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastTestFinalizedFilterSensitiveLog = (obj: LifeCycleLastTestFinalized): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastTestInitiatedFilterSensitiveLog = (obj: LifeCycleLastTestInitiated): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastTestRevertedFilterSensitiveLog = (obj: LifeCycleLastTestReverted): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleLastTestFilterSensitiveLog = (obj: LifeCycleLastTest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifeCycleFilterSensitiveLog = (obj: LifeCycle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CPUFilterSensitiveLog = (obj: CPU): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskFilterSensitiveLog = (obj: Disk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentificationHintsFilterSensitiveLog = (obj: IdentificationHints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OSFilterSensitiveLog = (obj: OS): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourcePropertiesFilterSensitiveLog = (obj: SourceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceServerFilterSensitiveLog = (obj: SourceServer): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteSourceServerRequestFilterSensitiveLog = (obj: DeleteSourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSourceServerResponseFilterSensitiveLog = (obj: DeleteSourceServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceServersRequestFiltersFilterSensitiveLog = (
  obj: DescribeSourceServersRequestFilters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceServersRequestFilterSensitiveLog = (obj: DescribeSourceServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSourceServersResponseFilterSensitiveLog = (obj: DescribeSourceServersResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SourceServerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DisconnectFromServiceRequestFilterSensitiveLog = (obj: DisconnectFromServiceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinalizeCutoverRequestFilterSensitiveLog = (obj: FinalizeCutoverRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchConfigurationRequestFilterSensitiveLog = (obj: GetLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicensingFilterSensitiveLog = (obj: Licensing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationFilterSensitiveLog = (obj: LaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReplicationConfigurationRequestFilterSensitiveLog = (obj: GetReplicationConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationConfigurationReplicatedDiskFilterSensitiveLog = (
  obj: ReplicationConfigurationReplicatedDisk
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationConfigurationFilterSensitiveLog = (obj: ReplicationConfiguration): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MarkAsArchivedRequestFilterSensitiveLog = (obj: MarkAsArchivedRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryDataReplicationRequestFilterSensitiveLog = (obj: RetryDataReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCutoverRequestFilterSensitiveLog = (obj: StartCutoverRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartCutoverResponseFilterSensitiveLog = (obj: StartCutoverResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const StartReplicationRequestFilterSensitiveLog = (obj: StartReplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTestRequestFilterSensitiveLog = (obj: StartTestRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartTestResponseFilterSensitiveLog = (obj: StartTestResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const TerminateTargetInstancesRequestFilterSensitiveLog = (obj: TerminateTargetInstancesRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TerminateTargetInstancesResponseFilterSensitiveLog = (obj: TerminateTargetInstancesResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const UpdateLaunchConfigurationRequestFilterSensitiveLog = (obj: UpdateLaunchConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSourceServerReplicationTypeRequestFilterSensitiveLog = (
  obj: UpdateSourceServerReplicationTypeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteVcenterClientRequestFilterSensitiveLog = (obj: DeleteVcenterClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVcenterClientsRequestFilterSensitiveLog = (obj: DescribeVcenterClientsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VcenterClientFilterSensitiveLog = (obj: VcenterClient): any => ({
  ...obj,
  ...(obj.sourceServerTags && { sourceServerTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeVcenterClientsResponseFilterSensitiveLog = (obj: DescribeVcenterClientsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => VcenterClientFilterSensitiveLog(item)) }),
});
