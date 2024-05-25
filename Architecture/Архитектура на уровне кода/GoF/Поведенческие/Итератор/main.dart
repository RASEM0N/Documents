/**
 * Паттерн итератор, дает возможность перебрать объект
 */

void main() {
  var range = new Range(0, 10);
  var rangeList = range.map((element) => element);
  print(rangeList);
}

class Range extends Iterable<int> {
  late final RangeIterator _iterator;

  Range(int from, int to) {
    this._iterator = new RangeIterator(from: from, to: to);
  }

  @override
  Iterator<int> get iterator => _iterator;
}

class RangeIterator implements Iterator<int> {
  late final int _to;
  late final int _from;
  int index = 0;

  RangeIterator({required int from, required int to}) {
    _to = to;
    _from = from;
  }

  @override
  int get current => _to + index;

  @override
  bool moveNext() {
    if (_to < _from) {
      return false;
    }

    index += 1;
    return true;
  }
}
