import { ApiManagementClient } from '@azure/arm-apimanagement';
import { DefaultAzureCredential } from '@azure/identity';

async function apiManagementUndelete() {
    const subscriptionId = '';
    const resourceGroupName = '';
    const serviceName = '';
    const location = 'northeurope';

    // just ensure restore is true, the other parameters are ignored apart from location
    const parameters = {
        location: location,
        publisherEmail: 'foo@contoso.com',
        publisherName: 'foo',
        restore: true,
        sku: { name: 'Developer', capacity: 1 },
    };

    const client = new ApiManagementClient(new DefaultAzureCredential(), subscriptionId);
    const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
        resourceGroupName,
        serviceName,
        parameters
    );
    console.log(result);
}

await apiManagementUndelete();
