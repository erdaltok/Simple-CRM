import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogActions,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  readonly startDate = new Date(1990, 0, 1);

  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate?: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUser() {
    if (this.birthDate) {
      this.loading = true;
      const formattedDate = this.birthDate.toLocaleDateString('en-US');
      this.user.birthDate = formattedDate;
      console.log('Current user is', this.user);

      addDoc(this.getUsersRef(), this.user.toJSON()).then((result) => {
        this.loading = false;
        console.log('Adding user finished', result);
          this.dialogRef.close();
      });
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // generate a function for log the user


}
