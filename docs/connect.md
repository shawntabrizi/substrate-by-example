---
id: connect
title: Connect To Polkadot
---

import { ApiPromise, WsProvider } from '@polkadot/api';

export const wsProvider = new WsProvider('wss://rpc.polkadot.io');

export const listenBlockNumber = ApiPromise.create({ provider: wsProvider }).then(async (api) => {
  const unsub = await api.rpc.chain.subscribeNewHeads((header) => {
    console.log("last block was", header.number);
    document.getElementById("blocknumber").innerText = header.number;
  });
});

Last block was: #<span id="blocknumber"></span>
