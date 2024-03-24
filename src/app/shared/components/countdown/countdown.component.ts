import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {

  // intervalId: number;
  
  // startCountDown = (rest:string, display: HTMLElement) => {
  //   let duration = Number(rest) * 60;
  //   let timer = duration, minutes, seconds;

  //   const updateCounter = () => {
  //     minutes = parseInt(String(timer / 60), 10);
  //     seconds = parseInt(String(timer % 60), 10);
  
  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;
  
  //     display.textContent = minutes + ":" + seconds;
  
  //     if (--timer < 0) {
  //       confetti();
  //       clearInterval(intervalId);
  //     }
  //   }
    
  //   clearInterval(intervalId);
  //   display.textContent = "--:--";
  //   intervalId = setInterval(() => updateCounter(), 1000);    
  // }


  // checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  // display = document.getElementById('countdown');
  // footer = document.querySelector('.footer');
  // rest = display?.getAttribute('data-rest') ?? '0';

  // checkboxes.forEach((checkbox) => {
  //     checkbox.addEventListener('change', () => {
  //       if(display) {
  //         if(checkbox.checked) {
  //           startCountDown(rest, display);
  //           display.classList.add('countdown--visible');
  //           footer?.classList.add('footer--visible');
  //         } else {
  //           display?.classList.remove('countdown--visible');
  //           footer?.classList.remove('footer--visible');
  //         }
  //       }     
  //     })
  // })
}
