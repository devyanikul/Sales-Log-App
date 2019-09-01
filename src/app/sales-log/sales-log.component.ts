import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewLogModalComponent } from '../new-log-modal/new-log-modal.component';
import { LogDetailsComponent } from '../log-details/log-details.component';

@Component({
  selector: 'app-sales-log',
  templateUrl: './sales-log.component.html',
  styleUrls: ['./sales-log.component.scss']
})
export class SalesLogComponent implements OnInit {
  @ViewChild(LogDetailsComponent) logDetails: LogDetailsComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewLogDialog(): void {
    const dialogRef = this.dialog.open(NewLogModalComponent,{ width: '400px',autoFocus: false, maxHeight: '90vh' });
    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.logDetails.ngOnInit();
      }
    });
  }
}
