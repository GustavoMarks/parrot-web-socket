export default class EchoSocket {
  constructor() {
    this.socket = new WebSocket("wss://echo.websocket.org/");
  }

  submit(message, handleError) {
    try {
      this.socket.send(message);

    } catch (error) {
      console.log(error);
      if (handleError) handleError();
    }
  }

  addOpener(method) {
    this.socket.onopen = function () { method() };
  }

  addMessager(method) {
    this.socket.onmessage = function (evt) { method(evt) };
  }

  addError(method) {
    this.socket.onerror = function (evt) { method(evt) };
  }

  addCloser(method) {
    this.socket.onclose = function () { method() };
  }
}