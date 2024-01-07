void main() {
  Component mainComponent = ListView([
    ListView([
      TextView(),
      TextView(),
      ListView([TextView()])
    ])
  ]);

  // отрендарим весь список
  render(mainComponent);
}

void render(Component component) {
  if (component is Leaf) {
    component.display();
  }

  if (component is Composite) {
    component.display();
    component.children.forEach((element) => render(element));
  }
}

abstract class Component {
  void display();
}

abstract class Leaf extends Component {}

abstract class Composite extends Component {
  late final List<Component> children;

  Composite(this.children);

  void ban() {}
}

class TextView extends Leaf {
  @override
  void display() {}
}

class ListView extends Composite {
  ListView(super.children);

  @override
  void display() {}
}
