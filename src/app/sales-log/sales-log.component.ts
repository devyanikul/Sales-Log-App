import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { NewLogModalComponent } from '../new-log-modal/new-log-modal.component';

@Component({
  selector: 'app-sales-log',
  templateUrl: './sales-log.component.html',
  styleUrls: ['./sales-log.component.scss']
})
export class SalesLogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewLogDialog(): void {
    const dialogRef = this.dialog.open(NewLogModalComponent,{
      width: '400px',disableClose: true 
    });
  }

}
