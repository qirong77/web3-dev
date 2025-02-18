// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
import {Token} from "./token.sol";

contract QirongTokenFactory {
    uint256 fee;
    address factoryOwner;
    struct TokenInfo {
        address Token;
        string name;
        uint256 totalSupply;
        uint256 soldCount;
        uint256 price;
    }
    mapping(address => Token) tokens;
    constructor(uint256 feeWhenCreatOneToken) {
        fee = feeWhenCreatOneToken;
        factoryOwner = msg.sender;
    }
    function createToken(string memory tokenName) external {
        Token token = new Token(msg.sender, tokenName, tokenName, 1000);
        tokens[token.address] = token;
    }
    function buy(address tokenAddress) external payable {
        Token targetToken = tokens[tokenAddress];
        
    }
}
