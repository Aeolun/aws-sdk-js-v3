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
  UpdateStudioComponentRequest,
  UpdateStudioComponentRequestFilterSensitiveLog,
  UpdateStudioComponentResponse,
  UpdateStudioComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1UpdateStudioComponentCommand,
  serializeAws_restJson1UpdateStudioComponentCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateStudioComponentCommandInput extends UpdateStudioComponentRequest {}
export interface UpdateStudioComponentCommandOutput extends UpdateStudioComponentResponse, __MetadataBearer {}

/**
 * <p>Updates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class UpdateStudioComponentCommand extends $Command<
  UpdateStudioComponentCommandInput,
  UpdateStudioComponentCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStudioComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStudioComponentCommandInput, UpdateStudioComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "UpdateStudioComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStudioComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateStudioComponentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStudioComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateStudioComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStudioComponentCommandOutput> {
    return deserializeAws_restJson1UpdateStudioComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
