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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  CreateDBInstanceMessage,
  CreateDBInstanceMessageFilterSensitiveLog,
  CreateDBInstanceResult,
  CreateDBInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBInstanceCommand,
  serializeAws_queryCreateDBInstanceCommand,
} from "../protocols/Aws_query";

export interface CreateDBInstanceCommandInput extends CreateDBInstanceMessage {}
export interface CreateDBInstanceCommandOutput extends CreateDBInstanceResult, __MetadataBearer {}

/**
 * <p>Creates a new instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class CreateDBInstanceCommand extends $Command<
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CreateDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBInstanceCommandOutput> {
    return deserializeAws_queryCreateDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
