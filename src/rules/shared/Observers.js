export default function Observers(){
    function subscribe(observeFunction) {
        observers.push(observeFunction)
    }

    function notifyAll(command) {
        console.log(`Notifying ${observers.length} observers`)
        for (const observeFunction of observers) {
            observeFunction(command)
        }
    }
}