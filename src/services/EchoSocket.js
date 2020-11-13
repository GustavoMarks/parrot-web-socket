export default class EchoSocket {
  constructor() {
    this.socket = new WebSocket("wss://echo.websocket.org/");
  }

  submit(message, handleError) {
    try {
      // Enviando mensagen apenas em conexão no estado "OPEN"
      if (this.socket.readyState === 1) { this.socket.send(message); }
      // Tentando novamente após 10 milisegundos
      else {
        console.log('Falha ao tentar enviar mesangem para socket... Tentando novamente');
        setTimeout(() => { this.submit(message, handleError) }, 1000);
        // Caso conexão com o soket seja encerrada
        if(this.socket.readyState === 3) return handleError();
      }

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