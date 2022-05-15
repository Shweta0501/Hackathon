import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  selectedOption = null;
  selectedOption1 = 0;

  tableData: { catname: string; noOfemp: number }[] = [
    { catname: 'BE', noOfemp: 5 },
    { catname: 'MBA', noOfemp: 4 },
  ];
  cat1 = [
    { category: 'IT' },
    { category: 'NON-IT' },
    { category: 'BE' },
    { category: 'MBA' },
  ];
  cat2 = [1, 2, 3, 4, 5];

  Category() {
    console.log(this.selectedOption);
    console.log(this.selectedOption1);
  }

  AddCategory() {
    let checkIfExist = this.tableData.findIndex(
      (e) => e.catname == this.selectedOption
    );
    if (checkIfExist == -1 && this.selectedOption!= null) {
      this.tableData.push({
        catname: this.selectedOption,
        noOfemp: this.selectedOption1,
      });
    } if(this.selectedOption!= null) {
      this.tableData.splice(checkIfExist, 1);
      this.tableData.push({
        catname: this.selectedOption,
        noOfemp: this.selectedOption1,
      });
    }
    console.log(checkIfExist);

    console.log(this.tableData);
  }
}
