export function get(
  url: string,
  init?: Omit<RequestInit, 'method'>
): Promise<Response> {
  return fetch(url, { ...init, method: 'GET' });
}
