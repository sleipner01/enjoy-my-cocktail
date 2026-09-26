import { http, HttpResponse } from 'msw';

import { server } from '../../../__mocks__/server';
import { fetchJson } from '../fetchJson';

const url = 'https://example.com/data';

describe('fetchJson', () => {
  it('should return the parsed JSON body', async () => {
    server.use(http.get(url, () => HttpResponse.json({ value: 42 })));
    expect(await fetchJson(url)).toEqual({ value: 42 });
  });

  it('should throw when the response status is not ok', async () => {
    server.use(http.get(url, () => new HttpResponse(null, { status: 500 })));
    await expect(fetchJson(url)).rejects.toThrow('failed with status 500');
  });
});
