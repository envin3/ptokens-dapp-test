import { EventEmitter } from 'eventemitter3'
import algosdk from 'algosdk'

class Provider extends EventEmitter {
  constructor(_algoSigner) {
    super()
    this.algoSigner = _algoSigner
    this.type = 'AlgoSigner'
  }

  close() {
    return
  }

  signTxn(_txns) {
    return this.algoSigner.signTxn(
      _txns.map((_tx) => ({ txn: Buffer.from(algosdk.encodeUnsignedTransaction(_tx)).toString('base64') }))
    )
  }

  sign(_tx) {
    return this.algoSigner.sign(_tx)
  }

  async getAccounts() {
    return Object.values(
      await this.algoSigner.accounts({
        ledger: 'MainNet',
      })
    ).map(({ address }) => address)
  }
}

const ConnectToAlgoSigner = async () => {
  if (typeof window.AlgoSigner === 'undefined') {
    throw new Error('AlgoSigner not installed')
  }

  await window.AlgoSigner.connect()

  const provider = new Provider(window.AlgoSigner)
  return provider
}

export default ConnectToAlgoSigner
