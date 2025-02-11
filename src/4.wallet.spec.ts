import { ethers, HDNodeWallet, Mnemonic, Wallet } from "ethers";
import { describe, it } from "vitest";
import { MNEMONIC } from "./private";

describe("wallet", () => {
    it("create a wallet with mnemonic", () => {
        const phrase = Wallet.createRandom().mnemonic?.phrase;
        console.log(phrase);
    });
    it("recover a wallet from mnemonic", async () => {
        // 创建 HD 钱包根节点
        const mnemonic = Mnemonic.fromPhrase(MNEMONIC);
        const hdNode = HDNodeWallet.fromMnemonic(mnemonic);
        console.log(hdNode)
    });

    it("get all account from  mnemonic", () => {
        const mnemonic = Mnemonic.fromPhrase(MNEMONIC);
        const hdNode = HDNodeWallet.fromMnemonic(mnemonic);
        const child1 = hdNode.deriveChild(1);
        console.log(child1)
    });
});
