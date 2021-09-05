import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateRoomComponent } from './create-room/create-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  declarations: [
    CreateRoomComponent, 
    UpdateRoomComponent, 
    RoomListComponent, 
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RoomModule { }
