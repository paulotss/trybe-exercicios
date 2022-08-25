const chai = require('chai');
const chaihttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaihttp);

const mock = JSON.stringify(
  {
    "brands": [
        {
            "id": 1,
            "name": "Lindt & Sprungli"
        },
        {
            "id": 2,
            "name": "Ferrero"
        },
        {
            "id": 3,
            "name": "Ghirardelli"
        }
    ],
    "chocolates": [
        {
            "id": 1,
            "name": "Mint Intense",
            "brandId": 1
        },
        {
            "id": 2,
            "name": "White Coconut",
            "brandId": 1
        },
        {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
        },
        {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
        }
    ]
  }
);

describe("Testa contratos da rota /chocolates", function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mock);
  });
  afterEach(function () {
    sinon.restore();
  })
  it("contrato da rota /chocolates", async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    const response = await chai
      .request(app)
      .get("/chocolates");
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
  it("contrato da rote /chocolates/total", async function () {
    const response = await chai
      .request(app)
      .get("/chocolates/total");
    expect(response.status).to.be.equal(200);
    expect(response.body.totalChocolates).to.be.equal(4);
  })
});


