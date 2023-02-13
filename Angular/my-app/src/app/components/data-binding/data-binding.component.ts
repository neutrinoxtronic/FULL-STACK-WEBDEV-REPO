import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  imgPath = "../../../assets/images/img21.jpg"

  username = "Admin"
  age = 32

  btnClicked(){
    alert("Thank you for clicking the button")
  }

  isDisabled = false

  myName = "AdminName"

  showMsg(msg:any){
    alert(msg);
  }

  constructor() {}
  ngOnInit(): void {}

}
