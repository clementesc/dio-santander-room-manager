import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../shared/models/room';
import { RoomService } from '../../core/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number;
  room: Room;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];
    
    this.roomService.getRoom(this.id)
      .subscribe(data => this.room = data, error => console.log('Error', error));
  }

  save() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log('Saved with sucess', data), error => console.log('Error', error));
    this.room = new Room();
    this.list();
  }
  
  list() {
    this.router.navigate(['/rooms']);
  }
}
