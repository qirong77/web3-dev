// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;

contract ContrastA {
    event ELog(string);
    function method1() external returns(string memory){
        return "this is method1 of contrastA";
    }
}