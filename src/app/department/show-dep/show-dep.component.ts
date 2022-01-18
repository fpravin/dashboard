import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

DepartentList: any = []
ModalTitle:string;
ActivateAddEditDepComp:boolean = false;
dep:any;


  ngOnInit(): void {
    this.refreshDeptList();
  }
 
refreshDeptList(){
  this.service.getDepList().subscribe(data => { 
    this.DepartentList=data;
  });
}  

addClick(){
this.dep={
  DepartmentId:0,
  DepartmentName:''
}

this.ModalTitle='Add Department'
this.ActivateAddEditDepComp=true;
}

closeClick(){
  this.ActivateAddEditDepComp=false;
  this.refreshDeptList();
}

editClick(item){
  this.dep=item;
  this.ModalTitle = 'Edit Departent'
  this.ActivateAddEditDepComp= true;
}

}
