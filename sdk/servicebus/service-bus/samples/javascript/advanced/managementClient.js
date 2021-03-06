/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  **NOTE**: This sample uses the preview of the next version of the @azure/service-bus package.
  For samples using the current stable version of the package, please use the link below:
  https://github.com/Azure/azure-sdk-for-js/tree/%40azure/service-bus_1.1.5/sdk/servicebus/service-bus/samples
  
  This sample demonstrates how the ServiceBusManagementClient can be used to manage the resources of a service bus namespace.

  See https://docs.microsoft.com/en-us/rest/api/servicebus/resource-provider-apis to learn more.
*/

const { ServiceBusManagementClient } = require("@azure/service-bus");

// Load the .env file if it exists
require("dotenv").config();

// Define connection string and related Service Bus entity names here
const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING || "<connection string>";
const queueName = process.env.QUEUE_NAME || "<queue name>";

export async function main() {
  // You can also use AAD credentials from `@azure/identity` along with the host url
  // instead of the connection string for authentication.
  const serviceBusManagementClient = new ServiceBusManagementClient(connectionString);

  // Similarly, you can create topics and subscriptions as well.
  const createQueueResponse = await serviceBusManagementClient.createQueue(queueName);
  console.log("Created queue with name - ", createQueueResponse.name);

  const getQueueResponse = await serviceBusManagementClient.getQueue(queueName);
  console.log("(Current)max delivery count = ", getQueueResponse.maxDeliveryCount);

  getQueueResponse.maxDeliveryCount = 12;
  const updateQueueResponse = await serviceBusManagementClient.updateQueue(getQueueResponse);
  console.log("(Updated)max delivery count = ", updateQueueResponse.maxDeliveryCount);

  const queueRuntimeInfo = await serviceBusManagementClient.getQueueRuntimeInfo(queueName);
  console.log("Number of messages in the queue = ", queueRuntimeInfo.messageCount);

  const namespaceInfo = await serviceBusManagementClient.getNamespaceProperties();
  console.log("Type of the namespace - ", namespaceInfo.namespaceType);

  await serviceBusManagementClient.deleteQueue(queueName);
  const queueExists = await serviceBusManagementClient.queueExists(queueName);
  if (queueExists == true) {
    console.log("Something went wrong, queue should have been deleted");
    return;
  }
  console.log(`Queue ${queueName} has been deleted`);
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
