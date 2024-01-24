void main() {
  var creator = new CreatorHomeBuilder();
  var homeBuilder = creator.getBuilder(HOME_BUILDER_TYPE.apartment);
  homeBuilder.addRoof();
  homeBuilder.addWall();
  homeBuilder.addWindow();

  print(homeBuilder.getResult());
}

abstract class HomeBuilder {
  final Home _home = new Home();

  void addWall();

  void addWindow();

  void addRoof();

  Home getResult() {
    return this._home;
  }
}

class CottageBuilder extends HomeBuilder {
  @override
  void addRoof() {
    this._home.roof = 'крыша для коттеджа';
  }

  @override
  void addWall() {
    this._home.wall = 'стена для коттеджа';
  }

  @override
  void addWindow() {
    this._home.window = 'окно для коттеджа';
  }
}

class ApartmentBlockBuilder extends HomeBuilder {
  @override
  void addRoof() {
    this._home.roof = 'крыша для многоквартирного дома';
  }

  @override
  void addWall() {
    this._home.wall = 'стена для многоквартирного дома';
  }

  @override
  void addWindow() {
    this._home.window = 'окно для многоквартирного дома';
  }
}

class Home {
  String? wall;
  String? roof;
  String? window;

  @override
  String toString() {
    return '''
        Стена $wall
        Крыша $roof
        Окно $window
    ''';
  }
}

enum HOME_BUILDER_TYPE { cottage, apartment }

class CreatorHomeBuilder {
  HomeBuilder getBuilder(HOME_BUILDER_TYPE type) {
    switch (type) {
      case HOME_BUILDER_TYPE.cottage:
        return new CottageBuilder();
      case HOME_BUILDER_TYPE.apartment:
        return new ApartmentBlockBuilder();

      default:
        {
          throw 'данный тип неподдерживается';
        }
    }
  }
}
