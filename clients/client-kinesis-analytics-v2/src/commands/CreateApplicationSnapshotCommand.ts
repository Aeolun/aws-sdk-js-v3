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
  CreateApplicationSnapshotRequest,
  CreateApplicationSnapshotRequestFilterSensitiveLog,
  CreateApplicationSnapshotResponse,
  CreateApplicationSnapshotResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateApplicationSnapshotCommand,
  serializeAws_json1_1CreateApplicationSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface CreateApplicationSnapshotCommandInput extends CreateApplicationSnapshotRequest {}
export interface CreateApplicationSnapshotCommandOutput extends CreateApplicationSnapshotResponse, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the application's state data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new CreateApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 */
export class CreateApplicationSnapshotCommand extends $Command<
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApplicationSnapshotCommandInput) {
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
  ): Handler<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "CreateApplicationSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateApplicationSnapshotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateApplicationSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateApplicationSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateApplicationSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
