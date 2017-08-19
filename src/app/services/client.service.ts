import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
// Import interface Client
import { Client } from '../models/Client'

@Injectable()
export class ClientService {
  flo_clients: FirebaseListObservable <any[]>;
  foo_client: FirebaseObjectObservable <any>

  constructor(
    // we need to injected dependency into the constructor
     public afd: AngularFireDatabase
  ) { // fetch the clients from the database
      this.flo_clients = this.afd.list('/clients') as FirebaseListObservable <Client[]>;
  }

  // So here we return whatever we fetch from firebase
  getClients () {
    return this.flo_clients;
  }

}
