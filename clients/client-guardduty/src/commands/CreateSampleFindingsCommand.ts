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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  CreateSampleFindingsRequest,
  CreateSampleFindingsRequestFilterSensitiveLog,
  CreateSampleFindingsResponse,
  CreateSampleFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSampleFindingsCommand,
  serializeAws_restJson1CreateSampleFindingsCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSampleFindingsCommandInput extends CreateSampleFindingsRequest {}
export interface CreateSampleFindingsCommandOutput extends CreateSampleFindingsResponse, __MetadataBearer {}

/**
 * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is
 *       specified for <code>findingTypes</code>, the API generates example findings of all supported
 *       finding types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateSampleFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateSampleFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateSampleFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSampleFindingsCommandInput} for command's `input` shape.
 * @see {@link CreateSampleFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class CreateSampleFindingsCommand extends $Command<
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSampleFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateSampleFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSampleFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSampleFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSampleFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSampleFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSampleFindingsCommandOutput> {
    return deserializeAws_restJson1CreateSampleFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
