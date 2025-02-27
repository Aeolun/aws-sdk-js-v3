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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListBulkDeploymentsRequest,
  ListBulkDeploymentsRequestFilterSensitiveLog,
  ListBulkDeploymentsResponse,
  ListBulkDeploymentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBulkDeploymentsCommand,
  serializeAws_restJson1ListBulkDeploymentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBulkDeploymentsCommandInput extends ListBulkDeploymentsRequest {}
export interface ListBulkDeploymentsCommandOutput extends ListBulkDeploymentsResponse, __MetadataBearer {}

/**
 * Returns a list of bulk deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListBulkDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class ListBulkDeploymentsCommand extends $Command<
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBulkDeploymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListBulkDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBulkDeploymentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBulkDeploymentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBulkDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBulkDeploymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBulkDeploymentsCommandOutput> {
    return deserializeAws_restJson1ListBulkDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
