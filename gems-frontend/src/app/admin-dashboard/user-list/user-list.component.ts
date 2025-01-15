// src/app/admin-dashboard/user-list/user-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Vous pouvez récupérer des utilisateurs via un service ici
  ];
}
