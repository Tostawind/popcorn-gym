import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { 
    console.log('__DEVICE SERVICE__');
  }

  isDesktop(): boolean {
    return window.innerWidth >= 950;
  }
}
