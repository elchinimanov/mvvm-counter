import CounterModel from './CounterModel.js'
import CounterViewModel from './CounterViewModel.js'

const init = () => {
    const counterViewModel = new CounterViewModel(new CounterModel())

    counterViewModel.init()
}

document.addEventListener('DOMContentLoaded', init)
