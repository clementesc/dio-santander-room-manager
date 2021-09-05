import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { CreateRoomComponent } from './room/create-room/create-room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomListComponent },
  { path: 'add', component: CreateRoomComponent },
  { path: 'update/:id', component: UpdateRoomComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
