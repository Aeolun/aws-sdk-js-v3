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
  ListClosedWorkflowExecutionsInput,
  ListClosedWorkflowExecutionsInputFilterSensitiveLog,
  WorkflowExecutionInfos,
  WorkflowExecutionInfosFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListClosedWorkflowExecutionsCommand,
  serializeAws_json1_0ListClosedWorkflowExecutionsCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

export interface ListClosedWorkflowExecutionsCommandInput extends ListClosedWorkflowExecutionsInput {}
export interface ListClosedWorkflowExecutionsCommandOutput extends WorkflowExecutionInfos, __MetadataBearer {}

/**
 * <p>Returns a list of closed workflow executions in the specified domain that meet the
 *       filtering criteria. The results may be split into multiple pages. To retrieve subsequent
 *       pages, make the call again using the nextPageToken returned by the initial call.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>tagFilter.tag</code>: String constraint. The key is
 *                 <code>swf:tagFilter.tag</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>typeFilter.name</code>: String constraint. The key is
 *                 <code>swf:typeFilter.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>typeFilter.version</code>: String constraint. The key is
 *                 <code>swf:typeFilter.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, ListClosedWorkflowExecutionsCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListClosedWorkflowExecutionsCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new ListClosedWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClosedWorkflowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListClosedWorkflowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 */
export class ListClosedWorkflowExecutionsCommand extends $Command<
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClosedWorkflowExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "ListClosedWorkflowExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClosedWorkflowExecutionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: WorkflowExecutionInfosFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClosedWorkflowExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListClosedWorkflowExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListClosedWorkflowExecutionsCommandOutput> {
    return deserializeAws_json1_0ListClosedWorkflowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
