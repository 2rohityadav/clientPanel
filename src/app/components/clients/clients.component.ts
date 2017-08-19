import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  c_clients: Client[];

  constructor(
    public c_clientService: ClientService
  ) { }

  ngOnInit() {
    // Now when this compornent initialize we wanna fetch clients through getClient method from client.servie.ts
    this.c_clientService.getClients().subscribe(clients => {
      this.c_clients = clients
      console.log(this.c_clients);
    })
  }

}
