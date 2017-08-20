import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  c_clients: any[];
  totalOwed: number;

  constructor(
    public c_clientService: ClientService
  ) { }

  ngOnInit() {
    // Now when this compornent initialize we wanna fetch clients through getClient method from client.servie.ts
    this.c_clientService.getClients().subscribe(clnts => {
      this.c_clients = clnts
      // console.log(this.c_clients);
      this.getTotalOwed();
    })
  }

  getTotalOwed () {
    let total = 0;
    for (let i = 0; i < this.c_clients.length; i++) {
        total += parseFloat(this.c_clients[i].balance);
        // console.log(this.totalOwed);
        console.log(this.c_clients);
    }
    this.totalOwed = total;
    // console.log(this.totalOwed);
  }


}
