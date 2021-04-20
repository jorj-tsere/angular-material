export function buildQueryString(parametersObject: object){
  let qs = '';
  for(const parameterKey of Object.keys(parametersObject)) {
    const parameterValue = parametersObject[parameterKey];
    qs += encodeURIComponent(parameterKey) + '=' + encodeURIComponent(parameterValue) + '&';
  }
  return qs;
}
