// // Создаём аудио-контекст для воспроизведения звука
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// // Создаём осциллятор внутри аудио-контекста
// const oscillator = audioCtx.createOscillator()

// function createButton() {
//   const button = document.createElement('div')
//   button.innerText = 'Start'
//   button.classList.add('button')
//   document.body.appendChild(button)

//   button.addEventListener('click', () => {
//     createOscillator()
//   })
// }

// function createSlider() {
//   const frequency = 440

//   const valueElement = document.createElement('div')
//   valueElement.innerText = frequency
//   document.body.appendChild(valueElement)

//   const slider = document.createElement('input')
//   slider.type = 'range'
//   slider.min = 0
//   slider.max = 1000
//   slider.step = 1
//   slider.value = frequency
//   document.body.appendChild(slider)

//   slider.addEventListener('input', (event) => {
//     // console.log('input', event.target.value)

//     valueElement.innerText = event.target.value

//     oscillator.frequency.setValueAtTime(
//       event.target.value,
//       audioCtx.currentTime
//     )
//   })
// }

// function createOscillator() {
//   // Задаём осциллятору тип волны
//   oscillator.type = 'square'

//   // Задаём осциллятору частоту в герцах
//   oscillator.frequency.setValueAtTime(440, audioCtx.currentTime)

//   // Подключаем осциллятор к выводу звука (нашим колонкам)
//   oscillator.connect(audioCtx.destination)

//   // Запускаем осциллятор
//   oscillator.start()
// }

// document.addEventListener('DOMContentLoaded', () => {
//   createButton()
//   createSlider()
// })





// const bassSynthSettings = {
//   volume: 0.8,
//   detune: 0,
//   portamento: 0.05,
//   envelope: {
//     attack: 0.05,
//     attackCurve: 'exponential',
//     decay: 0.2,
//     decayCurve: 'exponential',
//     sustain: 0.2,
//     release: 1.5,
//     releaseCurve: 'exponential'
//   },
//   oscillator: {
//     type: 'sawtooth',
//     modulationType: 'sine',
//     // partialCount: 0,
//     // partials: [],
//     phase: 0,
//     harmonicity: 0.5
//   }
// }

// const bassSynthSequence = [
//   {
//     time: '0:0:0',
//     noteName: 'C2',
//     duration: '2n',
//     velocity: 1
//   },
//   {
//     time: '0:2:0',
//     noteName: 'G2',
//     duration: '2n',
//     velocity: 1
//   },
//   {
//     time: '1:0:0',
//     noteName: 'E2',
//     duration: '2n',
//     velocity: 1
//   },
//   {
//     time: '1:2:0',
//     noteName: 'F2',
//     duration: '2n',
//     velocity: 1
//   }
// ]

const drumsFreeverbSettings = {
  wet: 0.8,
  roomSize: 0.9,
  dampening: 4
}

// const echoDrumFeedbackDelaySettings = {
//   wet: 1,
//   delayTime: 0.25,
//   maxDelayTime: 1
// }

// const echoDrumFreeverbSettings = {
//   wet: 1,
//   roomSize: 0.9,
//   dampening: 20
// }

// const echoDrumSamplerSequence = [
//   {
//     time: '1:1:2',
//     noteName: 'C2',
//     duration: '2n',
//     velocity: 1
//   }
// ]

const drumSamplerSequence = [
  {
    time: '0:0:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 2
  },
  {
    time: '0:1:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:2:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:3:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:0:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 2
  },
  {
    time: '1:1:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:2:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:3:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 1
  }
]

function initWebAudio() {
  Tone.start()
}

function initTransport() {
  const transport = Tone.getTransport()
  transport.bpm.value = 120
  transport.start()
}

import kick from './roland_tr_909/BT7A0D0.WAV'
import snare from './roland_tr_909/ST0T3S7.WAV'

function initDrum() {
  const sampler = new Tone.Sampler({
    urls: {
      C2: kick,
      D2: snare
    },
  })

  const freeverbNode = new Tone.Freeverb(drumsFreeverbSettings).toDestination()
  sampler.connect(freeverbNode)

  const part = new Tone.Part((time, note) => {
    sampler.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, drumSamplerSequence).start(0)

  part.loopEnd = '2m'
  part.loop = true
  
  const volume = 0.8

   const valueElement = document.createElement('div')
   valueElement.innerText = volume
   valueElement.className = 'value-text'
   document.body.appendChild(valueElement)

   const slider = document.createElement('input')
   slider.type = 'range'
   slider.className = 'volume-slider'
   slider.min = 0
   slider.max = 1
   slider.step = 0.01
   slider.value = volume
   document.body.appendChild(slider)

   slider.addEventListener('input', (event) => {
    const value = Number(event.target.value)

     valueElement.innerText = value

     sampler.volume.value = value === 0 ? - Infinity : Tone.gainToDb(value)
   })
}

// import hinat from './roland_tr_909/HHOD6.WAV'

// function initEchoDrum() {
//   const sampler = new Tone.Sampler({
//     urls: {
//       C2: hinat
//     },
//   }).toDestination()

//   const pingPongDelayNode = new Tone.PingPongDelay(
//     echoDrumFeedbackDelaySettings
//   ).toDestination()

//   const freeverbNode = new Tone.Freeverb(
//     echoDrumFreeverbSettings
//   ).toDestination()

//   sampler.chain(pingPongDelayNode, freeverbNode)

//   const part = new Tone.Part((time, note) => {
//     sampler.triggerAttackRelease(
//       note.noteName,
//       note.duration,
//       time,
//       note.velocity
//     )
//   }, echoDrumSamplerSequence).start(0)

//   part.loopEnd = '2m'
//   part.loop = true
// }

// function initBassSynth() {
//   const synthNode = new Tone.PolySynth(bassSynthSettings).toDestination()

//   const part = new Tone.Part((time, note) => {
//     synthNode.triggerAttackRelease(
//       note.noteName,
//       note.duration,
//       time,
//       note.velocity
//     )
//   }, bassSynthSequence).start(0)

//   part.loopEnd = '2m'
//   part.loop = true
// }

document.addEventListener('DOMContentLoaded', () => {
  const start_button = document.getElementById('start-button')

  start_button.addEventListener('click', async () => {

    await Tone.start()
    initWebAudio()
    initDrum()
    //initEchoDrum()
    //initBassSynth()
    await Tone.loaded()
    initTransport()
  })
})



const LtSamplerSequence = [
  {
    time: '0:0:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:0:2',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:1:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:1:2',
    noteName: 'C2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:2:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:2:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 1
  },

  {
    time: '0:3:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 2
  },
  {
    time: '1:0:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 0.5
  },
  {
    time: '1:1:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:2:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:3:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 2
  }
]

import lt from './roland_tr_909/LT0DA.WAV'
import lta from './roland_tr_909/LTADA.WAV'

function initLt() {
  const sampler = new Tone.Sampler({
    urls: {
      C2: lt,
      D2: lta
    },
  })

  const freeverbNode = new Tone.Freeverb(drumsFreeverbSettings).toDestination()
  sampler.connect(freeverbNode)

  const part = new Tone.Part((time, note) => {
    sampler.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, LtSamplerSequence).start(0)

  part.loopEnd = '2m'
  part.loop = true
  
  const volume = 0.8

   const valueElement = document.createElement('div')
   valueElement.innerText = volume
   valueElement.className = 'value-text light-or'
   document.body.appendChild(valueElement)

   const slider = document.createElement('input')
   slider.type = 'range'
   slider.className = 'volume-slider b-light-or'
   slider.min = 0
   slider.max = 1
   slider.step = 0.01
   slider.value = volume
   document.body.appendChild(slider)

   slider.addEventListener('input', (event) => {
    const value = Number(event.target.value)

     valueElement.innerText = value

     sampler.volume.value = value === 0 ? - Infinity : Tone.gainToDb(value)
   })
}

document.addEventListener('DOMContentLoaded', () => {
  const start_button = document.getElementById('middle-button')

  start_button.addEventListener('click', async () => {

    await Tone.start()
    initWebAudio()
    initLt()
    await Tone.loaded()
    initTransport()
  })
})
