import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatRadioModule, 
  MatNativeDateModule, MatSelectModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'

import { AppComponent } from './app.component';
import { SalesLogComponent } from './sales-log/sales-log.component';
import { NewLogModalComponent } from './new-log-modal/new-log-modal.component';
import { LogDetailsComponent } from './log-details/log-details.component';

@NgModule({
  exports: [MatDialogModule, MatGridListModule, MatInputModule, MatDatepickerModule, MatRadioModule, 
    MatNativeDateModule, MatSelectModule, MatTableModule]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    SalesLogComponent,
    NewLogModalComponent,
    LogDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewLogModalComponent]
})
export class AppModule { }
