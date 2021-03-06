// with help from https://github.com/georgeroubie/Angular-API-calls-the-right-way

/**
 * Helper class for creating query parameters for HTTP requests
 */
export class QueryStringParameters {
  private paramsAndValues: string[];

  constructor() {
    this.paramsAndValues = [];
  }

  public push(key: string, value: Object): void {
    value = encodeURIComponent(value.toString());
    this.paramsAndValues.push([key, value].join('='));
  }

  public toString = (): string => this.paramsAndValues.join('&');
}
