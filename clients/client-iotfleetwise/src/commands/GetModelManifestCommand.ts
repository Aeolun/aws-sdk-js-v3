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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  GetModelManifestRequest,
  GetModelManifestRequestFilterSensitiveLog,
  GetModelManifestResponse,
  GetModelManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetModelManifestCommand,
  serializeAws_json1_0GetModelManifestCommand,
} from "../protocols/Aws_json1_0";

export interface GetModelManifestCommandInput extends GetModelManifestRequest {}
export interface GetModelManifestCommandOutput extends GetModelManifestResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a vehicle model (model manifest). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new GetModelManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelManifestCommandInput} for command's `input` shape.
 * @see {@link GetModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class GetModelManifestCommand extends $Command<
  GetModelManifestCommandInput,
  GetModelManifestCommandOutput,
  IoTFleetWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetModelManifestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetModelManifestCommandInput, GetModelManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetModelManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetModelManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetModelManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetModelManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetModelManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetModelManifestCommandOutput> {
    return deserializeAws_json1_0GetModelManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
