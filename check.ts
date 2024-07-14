import { Connection,clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("mccann.sol");

const connection = new Connection(clusterApiUrl("mainnet-beta"));

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

// if (balanceInSOL < 20) {
//     throw new Error("SOL not enough brr!")
// }