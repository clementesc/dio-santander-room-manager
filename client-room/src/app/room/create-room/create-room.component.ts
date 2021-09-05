import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../core/room.service';
import { Room } from '../../shared/models/room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();

  constructor(private roomService: RoomService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(data => console.log('Saved with sucess', data), error => console.log('Error', error));
    this.room = new Room();
    this.list();
  }

  list() {
    this.router.navigate(['/rooms']);
  }
}
