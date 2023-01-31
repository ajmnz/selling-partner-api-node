<h1 align="center">Amazon Selling Partner API SDK</h1>
<p align="center">Fully typesafe Amazon Selling Partner API SDK for Node.js</p>
<div align="center">
  <a href="https://www.npmjs.com/package/sp-api-node">NPM</a>
</div>

<hr>

Some of the features

- 🛡 Fully typesafe with Amazon official definitions
- 🔄 Auto-updated with the latest model changes
- ⚡️ Auto-retrying requests when rate limited
- ⚔️ Authentication out of the box

## Installation

```sh
yarn add sp-api-node
# or with npm
npm install sp-api-node
```

## Before starting

In order to use the Selling Partner API, you need to register as a developer and register your application. Follow [Amazon's docs](https://developer-docs.amazon.com/sp-api/docs) on getting started with the Selling Partner API and obtaining a refresh token for your application.

#### Authentication

This SDK handles authentication for you and takes care of both acquiring an access token and assuming the role via STS, as well as keeping the credentials refreshed. The client expects the following credentials:

- **Client ID**: See [viewing your application information and credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials)
- **Client Secret**: See [viewing your application information and credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials)
- **Role ARN**: See [creating and configuring IAM policies and entities](https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities)
- **Access Key**: See [creating and configuring IAM policies and entities](https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities)
- **Secret Key**: See [creating and configuring IAM policies and entities](https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities)
- **Refresh Token**: See [Self authorization](https://developer-docs.amazon.com/sp-api/docs/self-authorization)
- **Role Session Name** (optional): For STS when assuming role. Default is `sp-api-node`.

## Usage

#### Client options

| option             | description                                                                                                                     | required | default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `region`           | The region for the Selling Partner API (see [SP-API Endpoints](https://developer-docs.amazon.com/sp-api/docs/sp-api-endpoints)) | yes      | -       |
| `debug`            | Log additional information like requests, authorization triggers, rate-limits, etc.                                             | no       | `false` |
| `handleRateLimits` | If the client should intercept rate-limited requests and wait the appropriate time before retrying the request                  | no       | `true`  |
| `credentials`      | Credentials for calling the SP API (see [Authentication](#authentication))                                                      | yes      | -       |

#### Calling the API

Import the client

```ts
import SellingPartner from "sp-api-node";
```

Create a new instance

```ts
const sp = new SellingPartner({
  region: "eu-west-1",
  credentials: {
    clientId: "amzn1.application-oa2-client.example",
    clientSecret: "050e346ef80574b4c3example",
    roleArn: "arn:aws:iam:3513513:role/SP-API-Example-Role",
    accessKey: "AKIAU420PEXAMPLE"
    secretKey: "53fac/51767+CJCo4/9aGexample",
    refreshToken: "Atzr|Ra55Kfgu-_...B03lexample",
    roleSessionName: "sp-api-node"
  }
})
```

Now all APIs are available as properties from the instance you just created. APIs that have only one version are accessible directly, while the ones that have multiple versions are accessible via `theApi.vVersion.theMethod()`.

```ts
// Single version

const participations = await sp.sellers.getMarketplaceParticipations();

// With multiple versions

const item = await sp.catalogItems.v0.getCatalogItem("my-asin", {
  MarketplaceId: "my-mkt-id",
});
```

#### Handling rate limits

This SDK automatically handles rate limits and waits for the necessary amount of time by reading the `x-amzn-RateLimit-Limit` header. See [Usage Plans and Rate Limits in the SP-API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

When Amazon replies with a `QuotaExceeded` error, the client will determine how many seconds are left before being able to retry the request without being rate-limited and stop execution for that amount of time.

If you want to prevent this type of behavior and have the client throw the `QuotaExceeded` error instead of waiting, pass `handleRateLimits: false` to the client constructor.

#### TypeScript support

This client is fully written in TypeScript, by transforming the Amazon OpenAPI models into TypeScript definitions using the amazing [acacode/swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) library.

#### Getting the latest model updates

A Github Action runs every 30 minutes and gets the latest models from [amzn/selling-partner-api-models](https://github.com/amzn/selling-partner-api-models). If there's any changes in the generated client, updates will be pushed a new version will be released ensuring we always work with the latest models.
