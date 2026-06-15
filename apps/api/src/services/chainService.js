import { ethers } from 'ethers';

export function getProvider() {
  const url = process.env.POLYGON_RPC_URL;
  if (!url) return null;
  return new ethers.JsonRpcProvider(url);
}

export function makeChainRecord(kind, localId) {
  return {
    kind,
    localId,
    network: process.env.POLYGON_RPC_URL ? 'polygon' : 'local',
    tokenId: null,
    txHash: null
  };
}
