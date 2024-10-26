import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    MatTooltipModule,  
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user = new User();
  

  constructor(public dialog: MatDialog) {
    
   }

  
  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }
}
