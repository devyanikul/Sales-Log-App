export interface log {
    date: string;
    entityName: string;
    taskType: taskType;
    time: string;
    contactPerson: string;
    notes?: string;
    status: status;
  }
  
  export interface taskType {
    call: string;
    meeting: string;
    videoCall: string;
  }
  
  export interface status {
    open: string;
    closed: string;
  }
  
  export interface MyFilter {
    entityName: string,
    taskType: string[],
    contactPerson: string,
    notes: string,
    status: string[]
  }