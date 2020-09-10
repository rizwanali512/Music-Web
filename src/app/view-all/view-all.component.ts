import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenVideoComponent } from '../models/open-video/open-video.component';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public playVideo(){
    let dialogRef = this.dialog.open(OpenVideoComponent, {
      data: true,
      width: 'auto',
    }); 
  }
}
