class Client {
  private _name: string;
  constructor(name: string) {
    this._name = name
  }

  set name(newName: string) {
    if (this._name.length < 2) {
      throw new Error("Invalid name")
    }
    this._name = newName
  }

  get name() {
    return this._name
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name
    this._price = price
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}

class Order {
  private _client: Client;
  private _orders: OrderItem[];
  private _discount: number;
  private _paymentMethod: string;

  constructor(client: Client, orders: OrderItem[], discount: number, paymentMethod: string) {
    this._client = client
    this._orders = orders,
      this._discount = discount
    this._paymentMethod = paymentMethod
  }

  public total() {
    return this._orders.reduce((acc, curr) => acc + curr.price, 0);
  }

  public totalWithDiscount() {
    const total = this.total();
    return total - (total * this._discount)
  }

  public recibo() {
    // Sim, sei que não é uma boa pratica chaves com espaço, mas para o teste ficou bonito 
    return {
      cliente: this._client,
      items: this._orders,
      total: this.total(),
      "Total com desconto": this.totalWithDiscount(),
      "Método de pagamento": this._paymentMethod
    }
  }
}

const batata = new OrderItem("Batata frita", 5);
const coca = new OrderItem("Coca cola", 7);

const cliente = new Client("Eu mesmo");

const pedido = new Order(cliente, [batata, coca], 0.10, "dinheiro");

console.log(pedido.recibo());
