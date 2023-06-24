export const parseProviderErrorMessage = (error: Error): string => {
    let { message } = error

    if (!message) {
        if (typeof error === 'string') {
            message = error
        }
    }

    try {
        message = JSON.parse(
            message.replace('Internal JSON-RPC error.', ''),
        ).message
    } catch {
        // Do nothing
    }

    if (!message) return 'Something went wrong'

    message = message
        .replace('execution reverted: ', '')
        .replace('MetaMask Tx Signature: ', '')
        .replace('err: ', '')
        .replace('user', 'you')
        .replace('User', 'You')
        .slice(0, 50)

    if (
        message.match(/subtraction overflow/gi) ||
        message.match(/low-level call failed/gi)
    ) {
        return 'You or the contract may have insufficient balance'
    }

    return message
}
