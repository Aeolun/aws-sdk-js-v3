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
  UpdateDecoderManifestRequest,
  UpdateDecoderManifestRequestFilterSensitiveLog,
  UpdateDecoderManifestResponse,
  UpdateDecoderManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateDecoderManifestCommand,
  serializeAws_json1_0UpdateDecoderManifestCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateDecoderManifestCommandInput extends UpdateDecoderManifestRequest {}
export interface UpdateDecoderManifestCommandOutput extends UpdateDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Updates a decoder manifest.</p>
 *         <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only
 *                 <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new UpdateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link UpdateDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class UpdateDecoderManifestCommand extends $Command<
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
  IoTFleetWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDecoderManifestCommandInput) {
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
  ): Handler<UpdateDecoderManifestCommandInput, UpdateDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "UpdateDecoderManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDecoderManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDecoderManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateDecoderManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDecoderManifestCommandOutput> {
    return deserializeAws_json1_0UpdateDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
