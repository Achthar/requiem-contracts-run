/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SyrupBar, SyrupBarInterface } from "../SyrupBar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract CakeToken",
        name: "_cake",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cake",
    outputs: [
      {
        internalType: "contract CakeToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "safeCakeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021be380380620021be833981810160405260208110156200003757600080fd5b5051604080518082018252600e81526d29bcb93ab82130b9102a37b5b2b760911b60208281019190915282518084019093526005835264053595255560dc1b908301529060006200008762000136565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000e69060049060208501906200013a565b508051620000fc9060059060208401906200013a565b5050600680546001600160a01b0390931661010002610100600160a81b031960ff19909416601217939093169290921790915550620001d6565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017d57805160ff1916838001178555620001ad565b82800160010185558215620001ad579182015b82811115620001ad57825182559160200191906001019062000190565b50620001bb929150620001bf565b5090565b5b80821115620001bb5760008155600101620001c0565b611fd880620001e66000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063893d20e811610104578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e146105ed578063e7a324dc1461061b578063f1127ed814610623578063f2fde38b14610675576101da565b8063a9059cbb1461054c578063b4b5ea5714610578578063c3cda5201461059e578063dce17484146105e5576101da565b80639dc29fac116100de5780639dc29fac146104ab578063a0712d68146104d7578063a2e6ddcc146104f4578063a457c2d714610520576101da565b8063893d20e8146104935780638da5cb5b1461049b57806395d89b41146104a3576101da565b806340c10f191161017c57806370a082311161014b57806370a0823114610413578063715018a614610439578063782d6fe1146104415780637ecebe001461046d576101da565b806340c10f191461033e578063587cde1e1461036c5780635c19a95c146103ae5780636fcfff45146103d4576101da565b806320606b70116101b857806320606b70146102b657806323b872dd146102be578063313ce567146102f45780633950935114610312576101da565b806306fdde03146101df578063095ea7b31461025c57806318160ddd1461029c575b600080fd5b6101e761069b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b038135169060200135610731565b604080519115158252519081900360200190f35b6102a461074f565b60408051918252519081900360200190f35b6102a4610755565b610288600480360360608110156102d457600080fd5b506001600160a01b03813581169160208101359091169060400135610779565b6102fc610800565b6040805160ff9092168252519081900360200190f35b6102886004803603604081101561032857600080fd5b506001600160a01b038135169060200135610809565b61036a6004803603604081101561035457600080fd5b506001600160a01b038135169060200135610857565b005b6103926004803603602081101561038257600080fd5b50356001600160a01b03166108e2565b604080516001600160a01b039092168252519081900360200190f35b61036a600480360360208110156103c457600080fd5b50356001600160a01b0316610900565b6103fa600480360360208110156103ea57600080fd5b50356001600160a01b031661090d565b6040805163ffffffff9092168252519081900360200190f35b6102a46004803603602081101561042957600080fd5b50356001600160a01b0316610925565b61036a610940565b6102a46004803603604081101561045757600080fd5b506001600160a01b0381351690602001356109e2565b6102a46004803603602081101561048357600080fd5b50356001600160a01b0316610bea565b610392610bfc565b610392610c0b565b6101e7610c1a565b61036a600480360360408110156104c157600080fd5b506001600160a01b038135169060200135610c7b565b610288600480360360208110156104ed57600080fd5b5035610d03565b61036a6004803603604081101561050a57600080fd5b506001600160a01b038135169060200135610d76565b6102886004803603604081101561053657600080fd5b506001600160a01b038135169060200135610f70565b6102886004803603604081101561056257600080fd5b506001600160a01b038135169060200135610fd8565b6102a46004803603602081101561058e57600080fd5b50356001600160a01b0316610fec565b61036a600480360360c08110156105b457600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135611050565b6103926112c3565b6102a46004803603604081101561060357600080fd5b506001600160a01b03813581169160200135166112d7565b6102a4611302565b6106556004803603604081101561063957600080fd5b5080356001600160a01b0316906020013563ffffffff16611326565b6040805163ffffffff909316835260208301919091528051918290030190f35b61036a6004803603602081101561068b57600080fd5b50356001600160a01b0316611353565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b5050505050905090565b600061074561073e6113b4565b84846113b8565b5060015b92915050565b60035490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b60006107868484846114a4565b6107f6846107926113b4565b6107f185604051806060016040528060288152602001611de5602891396001600160a01b038a166000908152600260205260408120906107d06113b4565b6001600160a01b0316815260208101919091526040016000205491906115f6565b6113b8565b5060019392505050565b60065460ff1690565b60006107456108166113b4565b846107f185600260006108276113b4565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061168d565b61085f6113b4565b6000546001600160a01b039081169116146108af576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b6108b982826116e7565b6001600160a01b038083166000908152600760205260408120546108de9216836117cd565b5050565b6001600160a01b039081166000908152600760205260409020541690565b61090a338261190a565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b6109486113b4565b6000546001600160a01b03908116911614610998576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000438210610a225760405162461bcd60e51b8152600401808060200182810382526027815260200180611e876027913960400191505060405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff1680610a50576000915050610749565b6001600160a01b038416600090815260086020908152604080832063ffffffff600019860181168552925290912054168310610abf576001600160a01b03841660009081526008602090815260408083206000199490940163ffffffff16835292905220600101549050610749565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff16831015610afa576000915050610749565b600060001982015b8163ffffffff168163ffffffff161115610bb357600282820363ffffffff16048103610b2c611d38565b506001600160a01b038716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610b8e576020015194506107499350505050565b805163ffffffff16871115610ba557819350610bac565b6001820392505b5050610b02565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610c06610c0b565b905090565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b610c836113b4565b6000546001600160a01b03908116911614610cd3576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b610cdd828261199f565b6001600160a01b038083166000908152600760205260408120546108de921690836117cd565b6000610d0d6113b4565b6000546001600160a01b03908116911614610d5d576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b610d6e610d686113b4565b836116e7565b506001919050565b610d7e6113b4565b6000546001600160a01b03908116911614610dce576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b600654604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610e1e57600080fd5b505afa158015610e32573d6000803e3d6000fd5b505050506040513d6020811015610e4857600080fd5b5051905080821115610ee2576006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820185905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b158015610eb057600080fd5b505af1158015610ec4573d6000803e3d6000fd5b505050506040513d6020811015610eda57600080fd5b50610f6b9050565b6006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820186905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b158015610f3e57600080fd5b505af1158015610f52573d6000803e3d6000fd5b505050506040513d6020811015610f6857600080fd5b50505b505050565b6000610745610f7d6113b4565b846107f185604051806060016040528060258152602001611f196025913960026000610fa76113b4565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906115f6565b6000610745610fe56113b4565b84846114a4565b6001600160a01b03811660009081526009602052604081205463ffffffff1680611017576000611049565b6001600160a01b038316600090815260086020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86661107b61069b565b8051906020012061108a611a8f565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401835280519085012061190160f01b6101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a90526102228601899052935192965090949293909260019261024280840193601f198301929081900390910190855afa1580156111bd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661120f5760405162461bcd60e51b8152600401808060200182810382526026815260200180611e0d6026913960400191505060405180910390fd5b6001600160a01b0381166000908152600a60205260409020805460018101909155891461126d5760405162461bcd60e51b8152600401808060200182810382526022815260200180611ed46022913960400191505060405180910390fd5b874211156112ac5760405162461bcd60e51b8152600401808060200182810382526026815260200180611dbf6026913960400191505060405180910390fd5b6112b6818b61190a565b505050505b505050505050565b60065461010090046001600160a01b031681565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b61135b6113b4565b6000546001600160a01b039081169116146113ab576040805162461bcd60e51b81526020600482018190526024820152600080516020611e33833981519152604482015290519081900360640190fd5b61090a81611a93565b3390565b6001600160a01b0383166113fd5760405162461bcd60e51b8152600401808060200182810382526024815260200180611d756024913960400191505060405180910390fd5b6001600160a01b0382166114425760405162461bcd60e51b8152600401808060200182810382526022815260200180611f816022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166114e95760405162461bcd60e51b8152600401808060200182810382526025815260200180611d506025913960400191505060405180910390fd5b6001600160a01b03821661152e5760405162461bcd60e51b8152600401808060200182810382526023815260200180611ef66023913960400191505060405180910390fd5b61156b81604051806060016040528060268152602001611eae602691396001600160a01b03861660009081526001602052604090205491906115f6565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461159a908261168d565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156116855760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561164a578181015183820152602001611632565b50505050905090810190601f1680156116775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611049576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b038216611742576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60035461174f908261168d565b6003556001600160a01b038216600090815260016020526040902054611775908261168d565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b0316141580156117ef5750600081115b15610f6b576001600160a01b03831615611881576001600160a01b03831660009081526009602052604081205463ffffffff16908161182f576000611861565b6001600160a01b038516600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b9050600061186f8285611b33565b905061187d86848484611b75565b5050505b6001600160a01b03821615610f6b576001600160a01b03821660009081526009602052604081205463ffffffff1690816118bc5760006118ee565b6001600160a01b038416600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006118fc828561168d565b90506112bb85848484611b75565b6001600160a01b038083166000908152600760205260408120549091169061193184610925565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46119998284836117cd565b50505050565b6001600160a01b0382166119e45760405162461bcd60e51b8152600401808060200182810382526021815260200180611f3e6021913960400191505060405180910390fd5b611a2181604051806060016040528060228152602001611f5f602291396001600160a01b03851660009081526001602052604090205491906115f6565b6001600160a01b038316600090815260016020526040902055600354611a479082611b33565b6003556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b4690565b6001600160a01b038116611ad85760405162461bcd60e51b8152600401808060200182810382526026815260200180611d996026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600061104983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115f6565b6000611b9943604051806060016040528060348152602001611e5360349139611cda565b905060008463ffffffff16118015611be257506001600160a01b038516600090815260086020908152604080832063ffffffff6000198901811685529252909120548282169116145b15611c1f576001600160a01b038516600090815260086020908152604080832063ffffffff60001989011684529091529020600101829055611c90565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600884528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260099092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b6000816401000000008410611d305760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561164a578181015183820152602001611632565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737343414b453a3a64656c656761746542795369673a207369676e6174757265206578706972656442455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636543414b453a3a64656c656761746542795369673a20696e76616c6964207369676e61747572654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657243414b453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747343414b453a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636543414b453a3a64656c656761746542795369673a20696e76616c6964206e6f6e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a206275726e2066726f6d20746865207a65726f206164647265737342455032303a206275726e20616d6f756e7420657863656564732062616c616e636542455032303a20617070726f766520746f20746865207a65726f2061646472657373a264697066735822122025599c92e3cefa806f3274842088b5ce3f19960eb9b4683198617722c5db271264736f6c634300060c0033";

export class SyrupBar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _cake: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SyrupBar> {
    return super.deploy(_cake, overrides || {}) as Promise<SyrupBar>;
  }
  getDeployTransaction(
    _cake: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cake, overrides || {});
  }
  attach(address: string): SyrupBar {
    return super.attach(address) as SyrupBar;
  }
  connect(signer: Signer): SyrupBar__factory {
    return super.connect(signer) as SyrupBar__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SyrupBarInterface {
    return new utils.Interface(_abi) as SyrupBarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SyrupBar {
    return new Contract(address, _abi, signerOrProvider) as SyrupBar;
  }
}