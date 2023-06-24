import { addEthereumChainParameter } from '../constants/chains'

export const getProvider = (provider) => {
    if (provider) {
        return provider
    } else if (window.ethereum) {
        return window.ethereum
    } else {
        return null
    }
}

export const handleSwitchChain = (() => {
    let status

    return (chainId, _provider) =>
        new Promise((resolve, reject) => {
            ;(async () => {
                if (status === 'pending') {
                    return
                }

                status = 'pending'
                let provider = getProvider(_provider)

                if (!provider) {
                    status = 'error'
                    reject('No provider for switching chain!')
                }

                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [
                            {
                                chainId: `0x${parseInt(chainId).toString(16)}`,
                            },
                        ],
                    })
                } catch (e) {
                    if (e.code === 4001) {
                        alert(
                            `Network switch request to ${addEthereumChainParameter[chainId].chainName} was rejected!`,
                        )
                        status = 'error'
                        reject(e.message)
                    } else if (
                        e.code === 4902 ||
                        (typeof e?.message === 'string' &&
                            e?.message.match(/Try adding the chain using/i))
                    ) {
                        try {
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [addEthereumChainParameter[chainId]],
                            })
                        } catch (e) {
                            if (e.code === 4001) {
                                alert(
                                    `Network switch request to ${addEthereumChainParameter[chainId].chainName} was rejected!`,
                                )
                                status = 'error'
                                reject(e.message)
                            } else {
                                status = 'error'
                                reject(e.message)
                            }
                        }
                    } else {
                        status = 'error'
                        reject(e.message)
                    }
                }

                await new Promise((resolve) => setTimeout(resolve, 1500))

                status = 'done'
                resolve(provider)
            })()
        })
})()
