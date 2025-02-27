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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  DeleteMessageRequest,
  DeleteMessageRequestFilterSensitiveLog,
  DeleteMessageResponse,
  DeleteMessageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMessageCommand,
  serializeAws_restJson1DeleteMessageCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteMessageCommandInput extends DeleteMessageRequest {}
export interface DeleteMessageCommandOutput extends DeleteMessageResponse, __MetadataBearer {}

/**
 * <p>Sends an event to a specific room which directs clients to delete a specific message;
 *          that is, unrender it from view and delete it from the client’s chat history. This event’s
 *             <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html">
 *             DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DeleteMessageCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DeleteMessageCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new DeleteMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class DeleteMessageCommand extends $Command<
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
  IvschatClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMessageCommandInput, DeleteMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "DeleteMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMessageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageCommandOutput> {
    return deserializeAws_restJson1DeleteMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
