class Item {
  static lastId = 0;

  constructor(text) {
    this.id = Item.lastId += 1;
    this.text = text;
    this.done = false;
  }
}
 
export default Item