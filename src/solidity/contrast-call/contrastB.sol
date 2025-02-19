// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
import {ContrastA} from "./contrastA.sol";
contract ContractB {
    function callContrastAByImpot() external {
        ContrastA ca = new ContrastA();
        ca.method1();
    }
    function callContrastAByAddress(address contractAddress) external pure {
        ContrastA ca = ContrastA(contractAddress);
        ca.method1();
    }
    // 在函数的返回类型中指定变量名称时，你可以在函数体内使用这些名称来存储和操作返回的数据。这种方式使得代码更具可读性和易于理解。
    function callContrastAByCall(address contractAddress) external returns (bool success, bytes memory data) {
        //  (boole success, bytes  data) 如果不使用指定返回变量时
        (success, data) = contractAddress.call(abi.encodeWithSignature("method1"));
        require(success, "fail call");
        return (success, data);
    }
    function decodeResponse(bytes memory data) external pure returns (string memory) {
        return abi.decode(data, (string));
    }
}
