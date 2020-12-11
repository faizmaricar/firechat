import { database } from "."

function createSession() {
  this.sessionId = database.ref("/sessions").push({ name: this.name })
}

export function Session(name) {
  this.name = name
  this.createSession = createSession
}

export function Message() {
  this.timestamp = new Date()
}
