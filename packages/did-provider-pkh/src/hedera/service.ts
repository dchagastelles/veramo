import { BigNumber } from 'bignumber.js';
import { AccountId, PrivateKey, PublicKey } from "@hashgraph/sdk";


export interface SimpleHederaClient {
    // get the associated private key, if available
    getPrivateKey(): PrivateKey | null;
  
    // get the associated public key
    getPublicKey(): PublicKey;
  
    // get the associated account ID
    getAccountId(): AccountId;
  
    createAccount(options: {
      publicKey: PublicKey;
      initialBalance: BigNumber;
    }): Promise<AccountId | null>;
  }