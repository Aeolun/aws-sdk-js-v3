// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationRequestFilterSensitiveLog,
  AddApplicationInputProcessingConfigurationResponse,
  AddApplicationInputProcessingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand,
  serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface AddApplicationInputProcessingConfigurationCommandInput
  extends AddApplicationInputProcessingConfigurationRequest {}
export interface AddApplicationInputProcessingConfigurationCommandOutput
  extends AddApplicationInputProcessingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records
 *       on the input stream before the
 *       application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 */
export class AddApplicationInputProcessingConfigurationCommand extends $Command<
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddApplicationInputProcessingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddApplicationInputProcessingConfigurationCommandInput,
    AddApplicationInputProcessingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationInputProcessingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationInputProcessingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationInputProcessingConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddApplicationInputProcessingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddApplicationInputProcessingConfigurationCommandOutput> {
    return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
