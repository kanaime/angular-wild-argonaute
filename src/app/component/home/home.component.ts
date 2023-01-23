import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  enableDarkMode(){
    let elem = document.getElementById('bouleId');
    let btnSup = document.querySelectorAll('.btn-supr');
    console.log(btnSup);
    setTimeout(() => {
      btnSup.forEach(function(e) {
        e.classList.toggle('displayNone')
      });
    }, 500)


    document.body.classList.toggle('darkmode');
    elem!.classList.toggle('bouleMove');
  }

}
