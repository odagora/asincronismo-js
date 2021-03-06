const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

(async () => {
    console.log('Before')
    await doSomething();
    console.log('After');
})()

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    console.log('Before1')
    await anotherFunction();
    console.log('After1');
})()