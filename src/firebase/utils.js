import { database } from "./firebase"

function createSession() {
  this.sessionId = database.ref("/sessions").push(this)
}

function deleteSession() {
  database.ref("/sessions").push(this)
}

export function Session(name) {
  this.name = name
  this.createSession = createSession
}
