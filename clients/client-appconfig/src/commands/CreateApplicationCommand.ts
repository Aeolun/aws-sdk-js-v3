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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  Application,
  ApplicationFilterSensitiveLog,
  CreateApplicationRequest,
  CreateApplicationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateApplicationCommand,
  serializeAws_restJson1CreateApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
export interface CreateApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * <p>Creates an application. In AppConfig, an application is simply an
 *          organizational construct like a folder. This organizational construct has a relationship
 *          with some unit of executable code. For example, you could create an application called
 *          MyMobileApp to organize and manage configuration data for a mobile application installed by
 *          your users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateApplicationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateApplicationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ApplicationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return deserializeAws_restJson1CreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
