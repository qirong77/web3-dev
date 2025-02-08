import { ethers, parseEther } from "ethers";
import { describe, expect, it } from "vitest";
import { devAcccountA, devAcccountB, NETWORD_URL } from "./private";

describe("transactions", () => {
    it("transfer", async () => {
        const sepoliaProvider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const wallet = new ethers.Wallet(devAcccountA.privateKey, sepoliaProvider);
        const balanceA = await sepoliaProvider.getBalance(devAcccountA.address);
        const balanceB = await sepoliaProvider.getBalance(devAcccountB.address);
        console.log(balanceA, balanceB);
        const tx = await wallet.sendTransaction({
            to: devAcccountB.address,
            value: parseEther("0.001"),
        });
        // wait until the tranaction finish
        await tx.wait();
        const balanceAAfterTransaction = await sepoliaProvider.getBalance(devAcccountA.address);
        const balanceBAfterTransaction = await sepoliaProvider.getBalance(devAcccountB.address);
        console.log(balanceAAfterTransaction,balanceBAfterTransaction)
        expect(balanceAAfterTransaction < balanceA)
    });
});
