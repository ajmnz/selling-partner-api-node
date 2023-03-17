import type { CreateUploadDestinationResponse } from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";

export class Uploads<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags uploads
   * @name CreateUploadDestinationForResource
   * @request POST:/uploads/2020-11-01/uploadDestinations/{resource}
   */
  createUploadDestinationForResource = (
    resource: string,
    query: {
      /**
       * A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
      /** An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit. */
      contentMD5: string;
      /** The content type of the file to be uploaded. */
      contentType?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<CreateUploadDestinationResponse, CreateUploadDestinationResponse>({
      path: `/uploads/2020-11-01/uploadDestinations/${resource}`,
      method: "POST",
      code: "post:/uploads/2020-11-01/uploadDestinations/{resource}",
      query,
      format: "json",
      ...params,
    });
}
