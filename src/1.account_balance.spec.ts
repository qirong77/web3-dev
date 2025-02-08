import { ethers, formatEther } from "ethers";
import { describe, expect, it } from "vitest";
import { accountMain, devAcccountA, NETWORD_URL } from "./private";

describe("account balance", () => {
    it("get eth balance", async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_MAIN);
        const balance = await provider.getBalance(accountMain.address);
        console.log(formatEther(balance));
        expect(typeof balance === "bigint");
    });
    it("get eth balance sepolia", async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const balance = await provider.getBalance(devAcccountA.address);
        console.log(formatEther(balance));
        expect(balance > 0);
    });
    it('get other token',async () => {
        
    })
});
