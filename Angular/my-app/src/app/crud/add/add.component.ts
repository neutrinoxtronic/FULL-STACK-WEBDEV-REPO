import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/shared/services/db.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ngOnInit(): void {}
  
  constructor(private service : GlobalService, private router: Router) {}

  addData(data:any){
    const empObj = {
      name: data.fname,
      post: data.epost,
      salary: data.salary,
      address: data.ecity
    }
    
    this.service.addRecord("Employees",empObj).subscribe( () => {
      alert("Record Added")
      this.router.navigate(['/crud'])
    })
  }
}
