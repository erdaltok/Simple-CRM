import { Component } from '@angular/core';
import { MatDialogModule, MatDialogActions, MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/user.class';


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
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  readonly startDate = new Date(1990, 0, 1);

  user = new User();
  birthDate?: Date;

  constructor(public dialog: MatDialog) { 
    
    }

  saveUser() {
    if (this.birthDate) {
      const formattedDate = this.birthDate.toLocaleDateString('de-DE');
      this.user.birthDate = formattedDate; // Speichern als formatiertes Datum
      console.log('Current user is', this.user);
    }
    
      
    }

}
