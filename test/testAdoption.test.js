

const Adoption =artifacts.require("Adoption");
contract("Adoption",(accounts)=>{

    let adoption;
    let expectedAdopters;
    before(async()=>{
        adoption=await Adoption.deployed();

    });
    describe("adopting a pet  and retrieving account address",async()=>{
        before("adopt a pet using accounts[0]",async()=>{
            await adoption.adopt(8,{from:accounts[0]});
            expectedAdopter=accounts[0];
        });
        it("can fetch the address of owner by pet id",async()=>{
            const adopter=await adoption.adopters(8);
            assert.equal(adopter,expectedAdopter,"This is the owner of adopted pet should be the first account");
        });
        it("can fetch the collection of all pet owners addresses",async()=>{
            const adopters=await adoption.getAdopters();
            assert.equal(adopters[8],expectedAdopter,"This is the owner of adopted pet should be the first account");
        });
    });
});
