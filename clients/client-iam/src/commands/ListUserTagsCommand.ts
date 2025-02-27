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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListUserTagsRequest,
  ListUserTagsRequestFilterSensitiveLog,
  ListUserTagsResponse,
  ListUserTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryListUserTagsCommand, serializeAws_queryListUserTagsCommand } from "../protocols/Aws_query";

export interface ListUserTagsCommandInput extends ListUserTagsRequest {}
export interface ListUserTagsCommandOutput extends ListUserTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListUserTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserTagsCommandInput} for command's `input` shape.
 * @see {@link ListUserTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListUserTagsCommand extends $Command<
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUserTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserTagsCommandInput, ListUserTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListUserTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUserTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUserTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUserTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListUserTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserTagsCommandOutput> {
    return deserializeAws_queryListUserTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
