import { showConnect } from "@stacks/connect";
import { StacksMocknet, StacksTestnet } from "@stacks/network";

export default function ConnectWallet({ userSession, userData, setUserData }) {
  const connectWallet = () => {
    showConnect({
      userSession,
      network: StacksTestnet,
      appDetails: {
        name: "BitLoan",
        icon: "https://freesvg.org/img/bitcoin.png",
      },
      onFinish: () => {
        window.location.reload();
      },
      onCancel: () => {
        // handle if user closed connection prompt
      },
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut(window.location.origin);
    setUserData({});
  };
  return (
    <button
      className="px-4 py-2 rounded-full bg-blue-500 hover:bg-green-700 text-white hover:text-white"
      onClick={() => {
        userData.profile ? disconnectWallet() : connectWallet();
      }}
    >
      {userData.profile ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
