import { ethers } from "./ethers-5.7.esm.min.js"
import { abi, contractAddress } from "./constant.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
const balanceButton = document.getElementById("balanceButton")
const withdrawButton = document.getElementById("withdrawButton")
connectButton.onclick = connect
fundButton.onclick = fund
balanceButton.onclick = getBalance
withdrawButton.onclick = withdraw 

//make it asenkrons soo metamask won't keedp ask
//any time when we refresh the page
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        //this method for access a user's account
        //read from metamask document :
        //https://docs.metamask.io/wallet/how-to/connect/access-accounts/
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("I see a metamask!")
        console.log(ethers)
    } else {
        console.log("No metamask!")
    }
}

async function getBalance() {
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await provider.getBalance(contractAddress)
        console.log(ethers.utils.formatEther(balance))
    }

}

async function withdraw() {

    if (typeof window.ethereum !== "undefined") {
        console.log("Withdrawing ...");
        //provider / connection to the blockchain
        // signer / wallet / smn with some gas
        //contract that we are interacting with
        // ^ABI and Address

        //finding https endpoint and put in our provider
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //return which ever wallet is connected from the provider
        //our provider is a metamask
        const signer = provider.getSigner()
        //console.log(signer)

        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.withdraw()
            await listenForTransactionMine(transactionResponse, provider)
            console.log("Done!")
        } catch (error) {
            console.log(error)
        }
    }
}

async function fund() {
    const ethAmount = document.getElementById("ethAmount").value
    console.log(`Funding with ${ethAmount} ...`)
    if (typeof window.ethereum !== "undefined") {
        //provider / connection to the blockchain
        // signer / wallet / smn with some gas
        //contract that we are interacting with
        // ^ABI and Address

        //finding https endpoint and put in our provider
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //return which ever wallet is connected from the provider
        //our provider is a metamask
        const signer = provider.getSigner()
        console.log(signer)

        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            await listenForTransactionMine(transactionResponse, provider)
            console.log("Done!")
        } catch (error) {
            console.log(error)
        }
    }
}

function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash} ...`)
   // console.log(transactionResponse)

    //listen for this transaction to finish
    return new Promise((resolve,reject) => {
        provider.once(transactionResponse.hash, (t) => {
            //this is like fiş (receipt) for transaction
            //console.log(t)
            console.log(
                `Completed with ${t.confirmations} confirmations.`
            )
            resolve()
        })
    })

}