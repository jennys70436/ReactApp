import roomJson from '../data/rooms.json'
import { Room } from '../components/Rooms/reducer'

const url = {
  static: roomJson,
  SQL: 'http://localhost:8080/api/room'
}

export function roomApi (source): Promise<Room[]> {
  return fetch(url[source], {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
}
