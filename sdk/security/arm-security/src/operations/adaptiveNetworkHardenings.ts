/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/adaptiveNetworkHardeningsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a AdaptiveNetworkHardenings. */
export class AdaptiveNetworkHardenings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a AdaptiveNetworkHardenings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceResponse>
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): void;
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>, callback?: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        options
      },
      listByExtendedResourceOperationSpec,
      callback) as Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceResponse>;
  }

  /**
   * Gets a single Adaptive Network Hardening resource
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveNetworkHardeningsGetResponse>
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AdaptiveNetworkHardeningsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardening>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardening>): void;
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdaptiveNetworkHardening>, callback?: msRest.ServiceCallback<Models.AdaptiveNetworkHardening>): Promise<Models.AdaptiveNetworkHardeningsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        adaptiveNetworkHardeningResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AdaptiveNetworkHardeningsGetResponse>;
  }

  /**
   * Enforces the given rules on the NSG(s) listed in the request
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enforce(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, body: Models.AdaptiveNetworkHardeningEnforceRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginEnforce(resourceGroupName,resourceNamespace,resourceType,resourceName,adaptiveNetworkHardeningResourceName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Enforces the given rules on the NSG(s) listed in the request
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param body
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginEnforce(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, body: Models.AdaptiveNetworkHardeningEnforceRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        adaptiveNetworkHardeningResourceName,
        body,
        options
      },
      beginEnforceOperationSpec,
      options);
  }

  /**
   * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceNextResponse>
   */
  listByExtendedResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByExtendedResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExtendedResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): void;
  listByExtendedResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>, callback?: msRest.ServiceCallback<Models.AdaptiveNetworkHardeningsList>): Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByExtendedResourceNextOperationSpec,
      callback) as Promise<Models.AdaptiveNetworkHardeningsListByExtendedResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByExtendedResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.adaptiveNetworkHardeningResourceName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardening
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginEnforceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}/{adaptiveNetworkHardeningEnforceAction}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.adaptiveNetworkHardeningResourceName,
    Parameters.adaptiveNetworkHardeningEnforceAction
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.AdaptiveNetworkHardeningEnforceRequest,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByExtendedResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
