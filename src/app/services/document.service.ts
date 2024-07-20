import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get nativeDocument(): Document | null {
    return isPlatformBrowser(this.platformId) ? document : null;
  }
}
