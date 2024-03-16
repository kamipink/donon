const prepMint = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];

  const mintCost = ethers.utils.parseEther(mintPrice);

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const transaction = await contract.mint(mintAmount, {
    from: account,
    value: mintCost,
  });

  await transaction.wait();

  alert("Minted successfully!");
};
