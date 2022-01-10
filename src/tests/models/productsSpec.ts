// @ts-nocheck
import { Product } from "../../models/products";


const product_ = new Product();

describe("Product model function existace" , ()=> {
    it('should have an index method', () => {
        expect(product_.index).toBeDefined();
      });
    it('should have a show method', () => {
        expect(product_.show).toBeDefined();
      });
    it('should have a create method', () => {
        expect(product_.create).toBeDefined();
      });
})

describe("Product model function return " , ()=> {
 
    it('create return ', async () => {
     const result = await product_.create({
         "name": "prod name",
         "category": "cat1",
         "price": "44"
     });
     expect(result.name).toEqual("prod name")
   });


    it('index return ', async () => {
    const result = await product_.index();
    expect(result).toBeTruthy()
  });  


  it('show return ', async () => {
    const result = await product_.show("1");
    expect(result).toBeTruthy()
  });
})
      