import settings from '../../../settings'
import { toastr } from 'react-redux-toastr'
import { WALLET_ULTRA_CONNECTED, WALLET_ULTRA_DISCONNECTED } from '../../../constants'
import EosConnect from '../../../lib/eosConnect/'
import { getWeb3ModalTheme } from '../../../theme/web3-modal'
import { getTheme } from '../../pages/pages.selectors'

const connectWithUltraWallet = (_dispatch) => {
  if (document.getElementById('EOS_CONNECT')) {
    document.getElementById('EOS_CONNECT').remove()
  }

  const eosConnect = new EosConnect({
    dappName: settings.dappName,
    theme: getWeb3ModalTheme(getTheme()),
    providerOptions: {
      tokenPocket: {
        settings: settings.rpc.mainnet.ultra,
      },
      anchor: {
        settings: settings.rpc.mainnet.ultra,
      },
    },
  })

  eosConnect.on('connect', ({ provider, account }) => {
    _dispatch({
      type: WALLET_ULTRA_CONNECTED,
      payload: {
        provider,
        account: account.actor,
        permission: account.permission,
        network: 'mainnet',
      },
    })
  })
  eosConnect.on('error', (message) => {
    toastr.error(message)
  })

  eosConnect.toggleModal()
}

const disconnectFromUltraWallet = (_dispatch) => {
  _dispatch({
    type: WALLET_ULTRA_DISCONNECTED,
  })
}

export { connectWithUltraWallet, disconnectFromUltraWallet }
