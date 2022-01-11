import { Order } from "../../models/orders";

const Order_ = new Order()

describe("Order model function existace", () => {
    it('should have a show method', () => {
        expect(Order_.show).toBeDefined();
      });
})