// Tone.js подключается в index.html (глобальный объект Tone).
// Пути к семплам считаем от расположения этого файла, чтобы не зависеть от страницы.
const SAMPLES_URL = new URL('roland_tr_909/', document.currentScript.src).href

const drumsFreeverbSettings = {
  wet: 0.8,
  roomSize: 0.9,
  dampening: 4
}

const START_VOLUME = 0.8

// ---------- Партии дорожек ----------

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

const opSamplerSequence = [
  {
    time: '0:0:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:0:1',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:0:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:0:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:1:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:1:2',
    noteName: 'D2',
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
    time: '0:2:1',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:2:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:2:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:3:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '0:3:1',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '0:3:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  
  {
    time: '1:0:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:0:1',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:0:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:0:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:1:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:1:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:2:0',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },


  {
    time: '1:2:1',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:2:2',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:2:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:3:0',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
  {
    time: '1:3:1',
    noteName: 'C2',
    duration: '2n',
    velocity: 1
  },
  {
    time: '1:3:3',
    noteName: 'D2',
    duration: '2n',
    velocity: 0.1
  },
]

// ---------- Дорожки ----------

// kick / snare, lt / lta, open hh / closed hh
const tracks = [
  {
    buttonId: 'start-button',
    sliderId: 'slider-1',
    valueId: 'value-1',
    urls: { C2: 'BT7A0D0.WAV', D2: 'ST0T3S7.WAV' },
    sequence: drumSamplerSequence
  },
  {
    buttonId: 'middle-button',
    sliderId: 'slider-2',
    valueId: 'value-2',
    urls: { C2: 'LT0DA.WAV', D2: 'LTADA.WAV' },
    sequence: LtSamplerSequence
  },
  {
    buttonId: 'end-button',
    sliderId: 'slider-3',
    valueId: 'value-3',
    urls: { C2: 'OPCL4.WAV', D2: 'HHOD0.WAV' },
    sequence: opSamplerSequence
  }
]

// Круги-кнопки: одиночные (незацикленные) звуки
const pads = [
  { id: 'pad-1', url: 'HANDCLP1.WAV' }, // хлопок
  { id: 'pad-2', url: 'HTAD3.WAV' }     // крэш
]

const volumeToDb = (value) => (value === 0 ? -Infinity : Tone.gainToDb(value))

let activeTracks = 0
let transportStarted = false

function updateTransport() {
  const transport = Tone.getTransport()
  if (activeTracks > 0 && !transportStarted) {
    transport.bpm.value = 120
    transport.start()
    transportStarted = true
  } else if (activeTracks === 0 && transportStarted) {
    // все дорожки выключены — останавливаем, следующий старт начнётся с первого такта
    transport.stop()
    transportStarted = false
  }
}

function initTrack(config) {
  const button = document.getElementById(config.buttonId)
  const slider = document.getElementById(config.sliderId)
  const valueElement = document.getElementById(config.valueId)

  const channel = new Tone.Channel({
    volume: volumeToDb(Number(slider.value)),
    mute: true
  }).toDestination()

  const freeverbNode = new Tone.Freeverb(drumsFreeverbSettings).connect(channel)

  const sampler = new Tone.Sampler({
    urls: config.urls,
    baseUrl: SAMPLES_URL
  }).connect(freeverbNode)

  const part = new Tone.Part((time, note) => {
    sampler.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, config.sequence)

  part.loopEnd = '2m'
  part.loop = true
  part.mute = true
  part.start(0)

  let isOn = false

  const render = () => {
    button.textContent = isOn ? 'стоп' : 'старт'
    button.setAttribute('aria-pressed', String(isOn))
  }

  button.addEventListener('click', async () => {
    // AudioContext можно запустить только по действию пользователя
    await Tone.start()
    await Tone.loaded()

    isOn = !isOn
    part.mute = !isOn
    channel.mute = !isOn
    if (!isOn) sampler.releaseAll()

    activeTracks += isOn ? 1 : -1
    updateTransport()
    render()
  })

  slider.addEventListener('input', () => {
    const value = Number(slider.value)
    valueElement.textContent = value.toFixed(2)
    channel.volume.value = volumeToDb(value)
  })

  valueElement.textContent = Number(slider.value).toFixed(2)
  render()
}

function initPad(config) {
  const element = document.getElementById(config.id)

  const player = new Tone.Player({
    url: SAMPLES_URL + config.url,
    loop: false,
    retrigger: true
  }).toDestination()

  element.addEventListener('click', async () => {
    await Tone.start()
    await Tone.loaded()
    player.start()
  })
}

// ---------- Масштаб макета под размер окна ----------

function fitStage() {
  const stage = document.getElementById('stage')
  const scale = Math.min(window.innerWidth / 1200, window.innerHeight / 750)
  stage.style.setProperty('--scale', scale)
}

document.addEventListener('DOMContentLoaded', () => {
  fitStage()
  window.addEventListener('resize', fitStage)

  tracks.forEach(initTrack)
  pads.forEach(initPad)
})
