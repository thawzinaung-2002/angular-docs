import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class HttpService {
  readonly http = inject(HttpClient);

  getRequest() {
    this.http.post<any>('', { responseType: 'arraybuffer' }).subscribe((str) => str);
  }
}
