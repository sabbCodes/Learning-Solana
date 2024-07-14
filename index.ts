import { Keypair } from "@solana/web3.js";

const pubNPriKey = Keypair.generate();

console.log("Public key:", pubNPriKey.publicKey.toBase58());
console.log("Private key:", pubNPriKey.secretKey);
console.log("Keypair generated successfully!");



import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const secret_key = getKeypairFromEnvironment("secretKey");

console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
