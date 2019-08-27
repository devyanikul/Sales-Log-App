import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';

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
  status: string = 'open';

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.addlogForm = this.fb.group({
      entityName: ['', [Validators.required]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      contactPerson: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      taskType: [null, [Validators.required]],
      date: [null, [Validators.required]],
      note: [null]
    });
  }

  public onAddlog(): void {
    this.markAsDirty(this.addlogForm);
    const formControl = this.addlogForm.controls;
    if(!this.addlogForm.errors) {
      let logDetails = {
        "date": formControl.date.value,
        "entityName": formControl.entityName,
        "taskType": formControl.taskType,
        "time": "1:00 PM",
        "contactPerson": formControl.contactPerson,
        "notes": formControl.notes,
        "status": this.status
      }
    }
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  statusOpen() {
    this.status = 'open';
  }

  statusClosed() {
    this.status = 'closed';
  }

}