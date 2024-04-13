import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { DeviceService } from '@core/services/device.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  deviceService = inject(DeviceService);
  isDesktop!: boolean;

  ngOnInit(): void {
    this.isDesktop = this.deviceService.isDesktop();
  }
}
