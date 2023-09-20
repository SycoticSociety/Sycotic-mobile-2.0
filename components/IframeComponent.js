import React from "react";

const IframeComponent = () => {
  return (
    <iframe
      src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0x65D8A98596D25Df1700F6258183791E070ebD195&chain=%7B%22name%22%3A%22Cronos+Mainnet%22%2C%22chain%22%3A%22CRO%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcronos.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Cronos%22%2C%22symbol%22%3A%22CRO%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22cro%22%2C%22chainId%22%3A25%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22cronos%22%7D&clientId=3fbb4107fe615d1b91b5c92ae87414b6&tokenId=0&theme=dark&primaryColor=purple"
      width="400px"
      height="550px"
      style={{ maxWidth: "100%" }}
      frameBorder="0"
    ></iframe>
  );
};

export default IframeComponent;
