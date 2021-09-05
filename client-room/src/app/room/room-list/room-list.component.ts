import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { RoomService } from "../../core/room.service";
import { Room } from "../../shared/models/room";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"]
})
export class RoomListComponent implements OnInit {
  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(data => this.reloadData(), error => console.log('Error', error));
  }

  roomDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number){
    this.router.navigate(['update', id]);
  }
}
