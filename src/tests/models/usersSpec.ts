// @ts-nocheck
import { User, user } from "../../models/users";

const user_ = new User();

describe("User model function existace" , ()=> {
    it('should have an index method', () => {
        expect(user_.index).toBeDefined();
      });
    it('should have a show method', () => {
        expect(user_.show).toBeDefined();
      });
    it('should have a create method', () => {
        expect(user_.create).toBeDefined();
      });
})

describe("User model function return " , ()=> {

  it('index return ', async () => {
    const result = await user_.index();
    expect(result).toBeTruthy()
  });
  
  
   it('create return ', async () => {
    const result = await user_.create({
      firstName: "name",
      lastName: "name2",
      password:"password"
    });
    expect(result.firstname).toEqual("name")
    expect(result.lastname).toEqual("name2")
  });


  it('show return ', async () => {
    const result = await user_.show("1");
    expect(result).toBeTruthy()
  });
})
      