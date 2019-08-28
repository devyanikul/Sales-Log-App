import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { log, MyFilter } from '../models/model';
import { GetLogDataService } from '../get-log-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.scss']
})
export class LogDetailsComponent implements OnInit {

  logArray: log[];
  dataSource;
  displayedColumns: string[] = ['date', 'entityName', 'taskType', 'time', 'contactPerson', 'notes', 'status'];
  taskType: string[] = ['Call', 'Meeting', 'Video Call'];
  status: string[] = ['open', 'closed'];

  entityNameFilter = new FormControl();
  taskTypeFilter = new FormControl();
  statusFilter = new FormControl();
  contactPersonFilter = new FormControl();
  NotesFilter = new FormControl();

  filteredValues: MyFilter = { entityName: '', taskType: [], contactPerson: '', notes: '', status: [] };

  constructor(private logDataService: GetLogDataService) { }

  ngOnInit() {
    this.logDataService.getLogJSON().subscribe(data => {
      this.logArray = data.logs;
      this.dataSource = new MatTableDataSource(this.logArray);
      this.filterData();
    });
  }

  filterData() {
    this.entityNameFilter.valueChanges.subscribe((entityNameFilterValue) => {
      this.filteredValues['entityName'] = entityNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.taskTypeFilter.valueChanges.subscribe((taskTypeFilterValue) => {
      this.filteredValues['taskType'] = taskTypeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues['status'] = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.contactPersonFilter.valueChanges.subscribe((contactPersonFilterValue) => {
      this.filteredValues['contactPerson'] = contactPersonFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.NotesFilter.valueChanges.subscribe((NotesFilterValue) => {
      this.filteredValues['notes'] = NotesFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  customFilterPredicate() {
    return (data: log, filter: string): boolean => {
      let searchString = JSON.parse(filter) as MyFilter;
      let isPositionAvailable = false;
      if (searchString.taskType.length) {
        for (const d of searchString.taskType) {
          if (data.taskType.toString().trim() == d) {
            isPositionAvailable = true;
          }
        }
      } else {
        isPositionAvailable = true;
      }
      return isPositionAvailable && data.entityName.toString().trim().toLowerCase().indexOf(searchString.entityName.toLowerCase()) !== -1;
    }
  }
}
