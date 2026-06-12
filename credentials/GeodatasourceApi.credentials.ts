import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GeodatasourceApi implements ICredentialType {
        name = 'N8nDevGeodatasourceApi';

        displayName = 'Geodatasource API';

        icon: Icon = { light: 'file:../nodes/Geodatasource/geodatasource.png', dark: 'file:../nodes/Geodatasource/geodatasource.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.geodatasource.com',
                        required: true,
                        placeholder: 'https://api.geodatasource.com',
                        description: 'The base URL of your Geodatasource API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
