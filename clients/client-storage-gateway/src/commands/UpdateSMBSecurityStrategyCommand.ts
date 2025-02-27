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
  UpdateSMBSecurityStrategyInput,
  UpdateSMBSecurityStrategyInputFilterSensitiveLog,
  UpdateSMBSecurityStrategyOutput,
  UpdateSMBSecurityStrategyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSMBSecurityStrategyCommand,
  serializeAws_json1_1UpdateSMBSecurityStrategyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface UpdateSMBSecurityStrategyCommandInput extends UpdateSMBSecurityStrategyInput {}
export interface UpdateSMBSecurityStrategyCommandOutput extends UpdateSMBSecurityStrategyOutput, __MetadataBearer {}

/**
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class UpdateSMBSecurityStrategyCommand extends $Command<
  UpdateSMBSecurityStrategyCommandInput,
  UpdateSMBSecurityStrategyCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSMBSecurityStrategyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBSecurityStrategyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSMBSecurityStrategyInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSMBSecurityStrategyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSMBSecurityStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSMBSecurityStrategyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSMBSecurityStrategyCommandOutput> {
    return deserializeAws_json1_1UpdateSMBSecurityStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
