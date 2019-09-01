import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetLogDataService } from '../get-log-data.service';

@Component({
  selector: 'app-new-log-modal',
  templateUrl: './new-log-modal.component.html',
  styleUrls: ['./new-log-modal.component.scss']
})
export class NewLogModalComponent implements OnInit {
  addlogForm: FormGroup;
  taskTypeList = ['Call', 'Video Call', 'meeting'];
  time = {hour: 13, minute: 30};
  
  wasFormChanged = false;
  status: string = 'Open';

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private logDataService: GetLogDataService,
    public dialogRef: MatDialogRef<NewLogModalComponent>
  ) { }

  ngOnInit(): void {
    this.addlogForm = this.fb.group({
      entityName: ['', [Validators.required]],
      contactPerson: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      time:[null, [Validators.required]],
      taskType: [null, [Validators.required]],
      date: [null, [Validators.required]],
      note: [null]
    });
  }

  onAddlog(): void {
    const formControl = this.addlogForm.controls;
    if(!this.addlogForm.errors) {
      let logDetails = {
        "date": formControl.date.value,
        "entityName": formControl.entityName.value,
        "taskType": formControl.taskType.value,
        "time": "1:00 PM",
        "contactPerson": formControl.contactPerson.value,
        "notes": formControl.note.value,
        "status": this.status,
        "id": "idx-"+Date.now().toPrecision()
      }
      this.logDataService.postLog(logDetails).subscribe(res => {
        if(res && res.contactPerson) {
          this.dialogRef.close('true');
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  statusOpen() {
    this.status = 'Open';
  }

  statusClosed() {
    this.status = 'Closed';
  }

}