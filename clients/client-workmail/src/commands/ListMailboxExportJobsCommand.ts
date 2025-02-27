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
  ListMailboxExportJobsRequest,
  ListMailboxExportJobsRequestFilterSensitiveLog,
  ListMailboxExportJobsResponse,
  ListMailboxExportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMailboxExportJobsCommand,
  serializeAws_json1_1ListMailboxExportJobsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface ListMailboxExportJobsCommandInput extends ListMailboxExportJobsRequest {}
export interface ListMailboxExportJobsCommandOutput extends ListMailboxExportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the mailbox export jobs started for the specified organization within the last
 *          seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxExportJobsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxExportJobsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMailboxExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMailboxExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxExportJobsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class ListMailboxExportJobsCommand extends $Command<
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMailboxExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMailboxExportJobsCommandInput, ListMailboxExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMailboxExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMailboxExportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMailboxExportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMailboxExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMailboxExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMailboxExportJobsCommandOutput> {
    return deserializeAws_json1_1ListMailboxExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
