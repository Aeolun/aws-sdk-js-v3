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
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import {
  DescribeScalingActivitiesRequest,
  DescribeScalingActivitiesRequestFilterSensitiveLog,
  DescribeScalingActivitiesResponse,
  DescribeScalingActivitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingActivitiesCommand,
  serializeAws_json1_1DescribeScalingActivitiesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeScalingActivitiesCommandInput extends DescribeScalingActivitiesRequest {}
export interface DescribeScalingActivitiesCommandOutput extends DescribeScalingActivitiesResponse, __MetadataBearer {}

/**
 * <p>Provides descriptive information about the scaling activities in the specified namespace
 *          from the previous six weeks.</p>
 *          <p>You can filter the results using <code>ResourceId</code> and
 *             <code>ScalableDimension</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 */
export class DescribeScalingActivitiesCommand extends $Command<
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalingActivitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DescribeScalingActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingActivitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingActivitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalingActivitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingActivitiesCommandOutput> {
    return deserializeAws_json1_1DescribeScalingActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
