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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  DisassociateMemberRequest,
  DisassociateMemberRequestFilterSensitiveLog,
  DisassociateMemberResponse,
  DisassociateMemberResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateMemberCommand,
  serializeAws_restJson1DisassociateMemberCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateMemberCommandInput extends DisassociateMemberRequest {}
export interface DisassociateMemberCommandOutput extends DisassociateMemberResponse, __MetadataBearer {}

/**
 * <p>Disassociates an Amazon Macie administrator account from a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisassociateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class DisassociateMemberCommand extends $Command<
  DisassociateMemberCommandInput,
  DisassociateMemberCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberCommandInput, DisassociateMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DisassociateMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateMemberResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMemberCommandOutput> {
    return deserializeAws_restJson1DisassociateMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
