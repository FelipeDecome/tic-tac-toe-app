type Options = {
  /**
   * defaults to 8
   */
  length?: number;
};

export abstract class ICUIDService {
  abstract generate(options?: Options): string;
}
