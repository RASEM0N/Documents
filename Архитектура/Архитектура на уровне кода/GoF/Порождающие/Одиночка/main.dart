class Application {

  /**
   * Сразуже создаем класс
   * ибо может быть проблема Race Conditional
   * (когда несколько потоков попадают в проверку
   * _singleton == null
   * и создают потом новый класс
   */
  static Application _singleton = new Application();

  static Application getInstance() {
    return _singleton;
  }
}
