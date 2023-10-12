import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

const USERS = [
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "edad": 30,
    "correo": "juan.perez@example.com",
    "ciudad": "Ciudad de México",
    "avatar_url": "https://unavatar.io/juan"
  },
  {
    "id": 2,
    "nombre": "María Gómez",
    "edad": 25,
    "correo": "maria.gomez@example.com",
    "ciudad": "Buenos Aires",
    "avatar_url": "https://unavatar.io/maria"
  },
  {
    "id": 3,
    "nombre": "Carlos Ramirez",
    "edad": 28,
    "correo": "carlos.ramirez@example.com",
    "ciudad": "Madrid",
    "avatar_url": "https://unavatar.io/carlos"
  },
  {
    "id": 4,
    "nombre": "Ana Santos",
    "edad": 22,
    "correo": "ana.santos@example.com",
    "ciudad": "Lima",
    "avatar_url": "https://unavatar.io/santos"
  },
  {
    "id": 5,
    "nombre": "Luis Torres",
    "edad": 35,
    "correo": "luis.torres@example.com",
    "ciudad": "Santiago",
    "avatar_url": "https://unavatar.io/luis"
  },
  {
    "id": 6,
    "nombre": "Karen Martínez",
    "edad": 29,
    "correo": "karen.martinez@example.com",
    "ciudad": "Barcelona",
    "avatar_url": "https://unavatar.io/karen"
  },
  {
    "id": 7,
    "nombre": "Pedro Silva",
    "edad": 27,
    "correo": "pedro.silva@example.com",
    "ciudad": "Rio de Janeiro",
    "avatar_url": "https://unavatar.io/pedro"
  },
  {
    "id": 8,
    "nombre": "Jairo Fernández",
    "edad": 31,
    "correo": "jairo.fernandez@example.com",
    "ciudad": "Bogotá",
    "avatar_url": "https://unavatar.io/jairo"
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyOnEnter', [
      transition('* => btn-open', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition('btn-open => *', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  cardIndex: number = 0;
  users: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    if (this.cardIndex >= USERS.length) return
    this.users = [...this.users, USERS[this.cardIndex]]
    this.cardIndex++
  }

}