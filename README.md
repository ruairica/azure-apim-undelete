### Undelete soft deleted azure api management services

##### How to check for soft deleted apim's:

-   az login
-   set your default az subscription
-   `$subscriptionId=$(az account show --query id --output tsv)`
-   `az rest --method GET --header "Accept=application/json" --uri "https://management.azure.com/subscriptions/${subscriptionId}/providers/Microsoft.ApiManagement/deletedservices?api-version=2021-08-01"`

##### Recover the soft deleted apim:

-   `npm install`
-   fill in the variables in main.ts, lines 5-8
-   npx tsx ./src/main.ts (it can take a while to recover/activate the service)
