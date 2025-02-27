// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  RevokeTokenRequest,
  RevokeTokenRequestFilterSensitiveLog,
  RevokeTokenResponse,
  RevokeTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RevokeTokenCommand,
  serializeAws_json1_1RevokeTokenCommand,
} from "../protocols/Aws_json1_1";

export interface RevokeTokenCommandInput extends RevokeTokenRequest {}
export interface RevokeTokenCommandOutput extends RevokeTokenResponse, __MetadataBearer {}

/**
 * <p>Revokes all of the access tokens generated by the specified refresh token. After the
 *             token is revoked, you can't use the revoked token to access Amazon Cognito authenticated
 *             APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, RevokeTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RevokeTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new RevokeTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeTokenCommandInput} for command's `input` shape.
 * @see {@link RevokeTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class RevokeTokenCommand extends $Command<
  RevokeTokenCommandInput,
  RevokeTokenCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeTokenCommandInput, RevokeTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "RevokeTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokeTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeTokenCommandOutput> {
    return deserializeAws_json1_1RevokeTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
