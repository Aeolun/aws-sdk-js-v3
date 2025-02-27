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
  GetAppValidationConfigurationRequest,
  GetAppValidationConfigurationRequestFilterSensitiveLog,
  GetAppValidationConfigurationResponse,
  GetAppValidationConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAppValidationConfigurationCommand,
  serializeAws_json1_1GetAppValidationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface GetAppValidationConfigurationCommandInput extends GetAppValidationConfigurationRequest {}
export interface GetAppValidationConfigurationCommandOutput
  extends GetAppValidationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about a configuration for validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class GetAppValidationConfigurationCommand extends $Command<
  GetAppValidationConfigurationCommandInput,
  GetAppValidationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAppValidationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppValidationConfigurationCommandInput, GetAppValidationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetAppValidationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppValidationConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAppValidationConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAppValidationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAppValidationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppValidationConfigurationCommandOutput> {
    return deserializeAws_json1_1GetAppValidationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
