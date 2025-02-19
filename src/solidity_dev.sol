// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;


contract Dev {
    function logArray() external returns(int[] memory){
        int[] memory arr = new int[](10);
        return arr;
    }
}
