/**
 *
 * @param {string} parametersObject simple object
 * @returns {string} encoded url string
 */
export function buildQueryString(parametersObject: object): string {
  let qs = '';
  for(const parameterKey of Object.keys(parametersObject)) {
    const parameterValue = parametersObject[parameterKey];
    qs += encodeURIComponent(parameterKey) + '=' + encodeURIComponent(parameterValue) + '&';
  }
  return qs;
}
