import { database } from "."

function createSession() {
  this.sessionId = database.ref("/sessions").push({ name: this.name })
}

export function getAllSessions() {
  return database.ref("/sessions")
}

export function getSessionById(sessionId) {
  return database.ref(`/sessions/${sessionId}`)
}

export function deleteSessionById(sessionId) {
  getSessionById(sessionId).remove()
}

export function getAllMessagesBySession(sessionId) {
  return database.ref("/messages").orderByChild("session").equalTo(sessionId)
}

function sendMessage() {
  this.messageId = database.ref("/messages").push({
    timestamp: this.timestamp,
    sentBy: this.sentBy,
    messageText: this.messageText,
    session: this.session,
  })
}

export function Session(name) {
  this.name = name
  this.createSession = createSession
}

export function Message(messageText, session, sentBy) {
  this.messageText = messageText
  this.session = session
  this.timestamp = new Date()
  this.sentBy = sentBy
  this.sendMessage = sendMessage
}
