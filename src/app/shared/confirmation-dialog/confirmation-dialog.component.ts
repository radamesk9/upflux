import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicElement } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  table!: MatTable<any>;
  element!: PeriodicElement[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement[],
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  ) {
    this.element = data;
  }


  ngOnInit(): void { }
  
  
  closeDialog(): void {
    this.dialogRef.close(false);
  }
}

