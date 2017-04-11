
const BrainObservable = require('../src/index');

const options = {
    verbose: true,
    simulate: true
};

const brainwaves$ = BrainObservable(options)
    .bufferCount(128)
    .bufferToFFT()
    .toMicrovolts()
    .lowPassFilter({ cutoffFrequency: 100 })
    .subscribe(fftBuffer =>
        console.log('fftBuffer with low pass filter', fftBuffer)
    );
