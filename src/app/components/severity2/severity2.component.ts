import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severity2',
  templateUrl: './severity2.component.html',
  styleUrls: ['./severity2.component.scss']
})
export class Severity2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedOption = null;
  selectedOption1 = 0;

  tableData: { catname: string; noOfemp: number }[] = [
    { catname: '$350 Delta Travel Vouchers', noOfemp: 1 },
    { catname: '$200 eCredits', noOfemp: 1 },
  ];
  cat1 = [
    { category: 'Membership Upgrade' },
    { category: '1500 Sky Miles' },
    { category: '$350 Delta Travel Vouchers' },
    { category: '$200 eCredits' },
    { category: '$30 Insta Cart' },
    { category: '$30 LYFT Credits' },
  ];
  cat2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
