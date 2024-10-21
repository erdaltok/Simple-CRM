import { Component } from '@angular/core';
import { MatDialogModule, MatDialogActions, MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatDialogActions,],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

    constructor(public dialog: MatDialog) { }



}
