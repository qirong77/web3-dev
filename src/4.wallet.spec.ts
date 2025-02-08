import { Wallet } from "ethers";
import { describe, it } from "vitest";
import { MNEMONIC } from "./private";

describe("wallet", () => {
    it("create a wallet with mnemonic", () => {
        const phrase = Wallet.createRandom().mnemonic?.phrase;
        console.log(phrase)
    });
    it("recover a wallet from mnemonic", () => {
        const wallet = Wallet.fromPhrase(MNEMONIC);
        console.log(wallet);
    });

    it("get all account from  mnemonic", () => {});
});
