[![Tests](https://github.com/pnetwork-association/ptokens-dapp/actions/workflows/run-test.yml/badge.svg)](https://github.com/pnetwork-association/ptokens-dapp/actions/workflows/run-test.yml)
[![Security Check](https://github.com/pnetwork-association/ptokens-dapp/actions/workflows/run-security.yml/badge.svg)](https://github.com/pnetwork-association/ptokens-dapp/actions/workflows/run-security.yml)
# <img src="https://user-images.githubusercontent.com/26067523/223670985-a1bfa5be-6d47-489a-9c08-88f82a215ee5.svg" width="40"/> pTokens dapp

The pTokens dapp

This is a 4everland test

&nbsp;

### :house_with_garden: Setting the environment:

Clone the __`ptokens-dapp`__ repo

```
git clone https://github.com/pnetwork-association/ptokens-dapp.git
```

Switch into the __`ptokens-dapp`__:

```
cd ptokens-dapp
```

Install dependencies:

```
npm install
```

&nbsp;

***

&nbsp;

### :wrench: Development:

Before running it you must clone __`ptokens.js`__, build it and copy all packages within this __`node_modules `__
folder (it's not a good solution but make it easy to develop in paraller both __`ptokens.js`__ and __`ptokens-dapp`__)


Start __`ptokens-dapp`__ via:

```
npm run dev
```

&nbsp;

***

&nbsp;

### :gear: Build and preview:

```
npm run build && npm run preview
```

#### JavaScript heap out of memory error

In case of Javascript heap out of memory error increase the heap with:

```
export NODE_OPTIONS=--max-old-space-size=4096
```

#### Swap setup

The build processes could be stopped with a `killed` message with no error. In this case it is possible swap memory is not configured correctly. Please increase the swap for the operating system used.

&nbsp;

### :rocket: Deploy:

```
npm run deploy
```

The build is deployed and pinned to IPFS and the CID is returned.
