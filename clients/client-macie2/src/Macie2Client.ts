// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import {
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "./commands/BatchGetCustomDataIdentifiersCommand";
import { CreateAllowListCommandInput, CreateAllowListCommandOutput } from "./commands/CreateAllowListCommand";
import {
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
} from "./commands/CreateClassificationJobCommand";
import {
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
} from "./commands/CreateCustomDataIdentifierCommand";
import {
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
} from "./commands/CreateFindingsFilterCommand";
import { CreateInvitationsCommandInput, CreateInvitationsCommandOutput } from "./commands/CreateInvitationsCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteAllowListCommandInput, DeleteAllowListCommandOutput } from "./commands/DeleteAllowListCommand";
import {
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
} from "./commands/DeleteCustomDataIdentifierCommand";
import {
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
} from "./commands/DeleteFindingsFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "./commands/DescribeBucketsCommand";
import {
  DescribeClassificationJobCommandInput,
  DescribeClassificationJobCommandOutput,
} from "./commands/DescribeClassificationJobCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableMacieCommandInput, DisableMacieCommandOutput } from "./commands/DisableMacieCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand";
import { EnableMacieCommandInput, EnableMacieCommandOutput } from "./commands/EnableMacieCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import { GetAllowListCommandInput, GetAllowListCommandOutput } from "./commands/GetAllowListCommand";
import {
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "./commands/GetBucketStatisticsCommand";
import {
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "./commands/GetClassificationExportConfigurationCommand";
import {
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "./commands/GetCustomDataIdentifierCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "./commands/GetFindingsFilterCommand";
import {
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "./commands/GetFindingsPublicationConfigurationCommand";
import {
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "./commands/GetFindingStatisticsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "./commands/GetMacieSessionCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import {
  GetRevealConfigurationCommandInput,
  GetRevealConfigurationCommandOutput,
} from "./commands/GetRevealConfigurationCommand";
import {
  GetSensitiveDataOccurrencesAvailabilityCommandInput,
  GetSensitiveDataOccurrencesAvailabilityCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesAvailabilityCommand";
import {
  GetSensitiveDataOccurrencesCommandInput,
  GetSensitiveDataOccurrencesCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "./commands/GetUsageTotalsCommand";
import { ListAllowListsCommandInput, ListAllowListsCommandOutput } from "./commands/ListAllowListsCommand";
import {
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "./commands/ListClassificationJobsCommand";
import {
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "./commands/ListCustomDataIdentifiersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import {
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "./commands/ListFindingsFiltersCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import {
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "./commands/ListManagedDataIdentifiersCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
} from "./commands/PutClassificationExportConfigurationCommand";
import {
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
} from "./commands/PutFindingsPublicationConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
} from "./commands/TestCustomDataIdentifierCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAllowListCommandInput, UpdateAllowListCommandOutput } from "./commands/UpdateAllowListCommand";
import {
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "./commands/UpdateClassificationJobCommand";
import {
  UpdateFindingsFilterCommandInput,
  UpdateFindingsFilterCommandOutput,
} from "./commands/UpdateFindingsFilterCommand";
import { UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput } from "./commands/UpdateMacieSessionCommand";
import {
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
} from "./commands/UpdateMemberSessionCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateRevealConfigurationCommandInput,
  UpdateRevealConfigurationCommandOutput,
} from "./commands/UpdateRevealConfigurationCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptInvitationCommandInput
  | BatchGetCustomDataIdentifiersCommandInput
  | CreateAllowListCommandInput
  | CreateClassificationJobCommandInput
  | CreateCustomDataIdentifierCommandInput
  | CreateFindingsFilterCommandInput
  | CreateInvitationsCommandInput
  | CreateMemberCommandInput
  | CreateSampleFindingsCommandInput
  | DeclineInvitationsCommandInput
  | DeleteAllowListCommandInput
  | DeleteCustomDataIdentifierCommandInput
  | DeleteFindingsFilterCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMemberCommandInput
  | DescribeBucketsCommandInput
  | DescribeClassificationJobCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DisableMacieCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisassociateFromAdministratorAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMemberCommandInput
  | EnableMacieCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | GetAdministratorAccountCommandInput
  | GetAllowListCommandInput
  | GetBucketStatisticsCommandInput
  | GetClassificationExportConfigurationCommandInput
  | GetCustomDataIdentifierCommandInput
  | GetFindingStatisticsCommandInput
  | GetFindingsCommandInput
  | GetFindingsFilterCommandInput
  | GetFindingsPublicationConfigurationCommandInput
  | GetInvitationsCountCommandInput
  | GetMacieSessionCommandInput
  | GetMasterAccountCommandInput
  | GetMemberCommandInput
  | GetRevealConfigurationCommandInput
  | GetSensitiveDataOccurrencesAvailabilityCommandInput
  | GetSensitiveDataOccurrencesCommandInput
  | GetUsageStatisticsCommandInput
  | GetUsageTotalsCommandInput
  | ListAllowListsCommandInput
  | ListClassificationJobsCommandInput
  | ListCustomDataIdentifiersCommandInput
  | ListFindingsCommandInput
  | ListFindingsFiltersCommandInput
  | ListInvitationsCommandInput
  | ListManagedDataIdentifiersCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListTagsForResourceCommandInput
  | PutClassificationExportConfigurationCommandInput
  | PutFindingsPublicationConfigurationCommandInput
  | SearchResourcesCommandInput
  | TagResourceCommandInput
  | TestCustomDataIdentifierCommandInput
  | UntagResourceCommandInput
  | UpdateAllowListCommandInput
  | UpdateClassificationJobCommandInput
  | UpdateFindingsFilterCommandInput
  | UpdateMacieSessionCommandInput
  | UpdateMemberSessionCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdateRevealConfigurationCommandInput;

export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | BatchGetCustomDataIdentifiersCommandOutput
  | CreateAllowListCommandOutput
  | CreateClassificationJobCommandOutput
  | CreateCustomDataIdentifierCommandOutput
  | CreateFindingsFilterCommandOutput
  | CreateInvitationsCommandOutput
  | CreateMemberCommandOutput
  | CreateSampleFindingsCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteAllowListCommandOutput
  | DeleteCustomDataIdentifierCommandOutput
  | DeleteFindingsFilterCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMemberCommandOutput
  | DescribeBucketsCommandOutput
  | DescribeClassificationJobCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DisableMacieCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisassociateFromAdministratorAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMemberCommandOutput
  | EnableMacieCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | GetAdministratorAccountCommandOutput
  | GetAllowListCommandOutput
  | GetBucketStatisticsCommandOutput
  | GetClassificationExportConfigurationCommandOutput
  | GetCustomDataIdentifierCommandOutput
  | GetFindingStatisticsCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsFilterCommandOutput
  | GetFindingsPublicationConfigurationCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMacieSessionCommandOutput
  | GetMasterAccountCommandOutput
  | GetMemberCommandOutput
  | GetRevealConfigurationCommandOutput
  | GetSensitiveDataOccurrencesAvailabilityCommandOutput
  | GetSensitiveDataOccurrencesCommandOutput
  | GetUsageStatisticsCommandOutput
  | GetUsageTotalsCommandOutput
  | ListAllowListsCommandOutput
  | ListClassificationJobsCommandOutput
  | ListCustomDataIdentifiersCommandOutput
  | ListFindingsCommandOutput
  | ListFindingsFiltersCommandOutput
  | ListInvitationsCommandOutput
  | ListManagedDataIdentifiersCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutClassificationExportConfigurationCommandOutput
  | PutFindingsPublicationConfigurationCommandOutput
  | SearchResourcesCommandOutput
  | TagResourceCommandOutput
  | TestCustomDataIdentifierCommandOutput
  | UntagResourceCommandOutput
  | UpdateAllowListCommandOutput
  | UpdateClassificationJobCommandOutput
  | UpdateFindingsFilterCommandOutput
  | UpdateMacieSessionCommandOutput
  | UpdateMemberSessionCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdateRevealConfigurationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type Macie2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of Macie2Client class constructor that set the region, credentials and other options.
 */
export interface Macie2ClientConfig extends Macie2ClientConfigType {}

type Macie2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of Macie2Client class. This is resolved and normalized from the {@link Macie2ClientConfig | constructor configuration interface}.
 */
export interface Macie2ClientResolvedConfig extends Macie2ClientResolvedConfigType {}

/**
 * <p>Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.</p>
 */
export class Macie2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Macie2ClientResolvedConfig
> {
  /**
   * The resolved configuration of Macie2Client class. This is resolved and normalized from the {@link Macie2ClientConfig | constructor configuration interface}.
   */
  readonly config: Macie2ClientResolvedConfig;

  constructor(configuration: Macie2ClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
