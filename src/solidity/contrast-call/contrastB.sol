// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
import {ContrastA} from "./contrastA.sol";
contract B {
    function callContrastAByImpot() external {
        ContrastA ca = new ContrastA();
        ca.method1();
    }
    function callContrastAByAddress(address contractAddress) external {
        ContrastA ca = ContrastA(contractAddress);
        ca.method1();
    }
}
