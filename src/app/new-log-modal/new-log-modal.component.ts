import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-log-modal',
  templateUrl: './new-log-modal.component.html',
  styleUrls: ['./new-log-modal.component.scss']
})
export class NewLogModalComponent implements OnInit {
  public addlogForm: FormGroup;
  public taskTypeList = ['Call', 'Video Call', 'meeting'];
  
  wasFormChanged = false;

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
    if(!this.addlogForm.errors) {
      let logDetails = {
        
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

  }

}