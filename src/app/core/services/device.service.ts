import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { 
  }

  isDesktop(): boolean {
    return window.innerWidth >= 950;
  }
}
