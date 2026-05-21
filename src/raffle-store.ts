import { Store } from '@geajs/core'

export interface HistoryEntry {
  id: string
  title: string
  date: string
  winners: string[]
  substitutes: string[]
  winnersCount: number
  substitutesCount: number
  participantsCount: number
}

const DEFAULT_PARTICIPANTS = [
  "Esmanur Da***",
  "ufuk pı***",
  "Mehmet ÖZ***",
  "Mehmet Fı***",
  "Musa KO***",
  "Sudem ho***",
  "Ahmet Do***",
  "Emirhan Sö***",
  "Müge Yı***",
  "Elif Lü***",
  "ercan gu***",
  "Kerem Bü***",
  "Yusuf Ay***",
  "Gemini Ai",
  "Hızır ÜN***",
  "Sefer KU***",
  "Eda Ub***",
  "Umut DU***",
  "ALİ UĞ***",
  "Tayfun TE***",
  "Koray ÖZ***",
  "Nisa Bo***",
  "Eren Kü***",
  "Muhammet PE***",
  "Emre Bnc",
  "Ahmet Co***",
  "Ebubekir AK***",
  "Nur Gu***",
  "Muzaffer AY***",
  "Melisa AY***",
  "Aylin AK***",
  "serdar şA***",
  "Neslihan YI***",
  "Yasir KA***",
  "Efe AS***",
  "Erva Ba***",
  "Oğuzhan KA***",
  "Aynmable",
  "ELIF KA***",
  "Mehmet MU***",
  "nazan şA***",
  "Yusuf DE***",
  "Yasir KA***",
  "Faris ZA***",
  "Muhammed ÖZ***",
  "Sever ŞA***",
  "Tarık DE***",
  "Emre YÜ***",
  "Yunus Emre TA***",
  "Emine ER***",
  "Oguzhan CA***",
  "Ömer SÜ***",
  "Wan HA***",
  "hamza ÖZ***",
  "Halil TO***",
  "Aleyna MU***",
  "Selcan",
  "Egemen AL***",
  "Salih YA***",
  "Aliye HA***",
  "Bora ko***",
  "Lalu Khairan S",
  "Adham Mnbrs",
  "Gülcan MA***",
  "Emirhan TE***",
  "Ali ER***",
  "Gizem ÖK***",
  "Dogukaan BA***"
]

class RaffleStore extends Store {
  title = 'GDG Workshop Çekilişi'
  participants: string[] = []
  winnersCount = 1
  substitutesCount = 0
  
  winners: string[] = []
  substitutes: string[] = []
  
  isDrawing = false
  drawingName = ''
  
  history: HistoryEntry[] = []

  constructor() {
    super()
    this.loadFromLocalStorage()
  }

  loadFromLocalStorage() {
    try {
      const savedHistory = localStorage.getItem('raffle_history')
      if (savedHistory) {
        this.history = JSON.parse(savedHistory)
      }
      
      const savedParticipants = localStorage.getItem('raffle_participants')
      if (savedParticipants) {
        this.participants = JSON.parse(savedParticipants)
      } else {
        this.participants = [...DEFAULT_PARTICIPANTS]
      }
    } catch (e) {
      console.error('Failed to load from localStorage', e)
      this.participants = [...DEFAULT_PARTICIPANTS]
    }
  }

  saveToLocalStorage() {
    try {
      localStorage.setItem('raffle_history', JSON.stringify(this.history))
      localStorage.setItem('raffle_participants', JSON.stringify(this.participants))
    } catch (e) {
      console.error('Failed to save to localStorage', e)
    }
  }

  addParticipant(name: string) {
    const trimmed = name.trim()
    if (trimmed && !this.participants.includes(trimmed)) {
      this.participants.push(trimmed)
      this.saveToLocalStorage()
    }
  }

  importParticipants(text: string) {
    const names = text
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0)
    
    let addedCount = 0
    names.forEach(name => {
      if (!this.participants.includes(name)) {
        this.participants.push(name)
        addedCount++
      }
    })
    
    if (addedCount > 0) {
      this.saveToLocalStorage()
    }
  }

  removeParticipant(index: number) {
    if (index >= 0 && index < this.participants.length) {
      this.participants.splice(index, 1)
      this.saveToLocalStorage()
    }
  }

  clearParticipants() {
    this.participants = []
    this.saveToLocalStorage()
  }

  resetParticipantsToDefault() {
    this.participants = [...DEFAULT_PARTICIPANTS]
    this.saveToLocalStorage()
  }

  resetDraw() {
    this.winners = []
    this.substitutes = []
    this.drawingName = ''
  }

  deleteHistoryEntry(id: string) {
    this.history = this.history.filter(entry => entry.id !== id)
    this.saveToLocalStorage()
  }

  clearHistory() {
    this.history = []
    this.saveToLocalStorage()
  }

  draw() {
    const totalRequired = this.winnersCount + this.substitutesCount
    if (this.participants.length < totalRequired) {
      alert(`Yetersiz katılımcı! En az ${totalRequired} katılımcı gereklidir.`)
      return
    }
    
    if (this.winnersCount < 1) {
      alert('En az 1 kazanan seçilmelidir.')
      return
    }

    this.isDrawing = true
    this.winners = []
    this.substitutes = []
    
    const duration = 2500 // 2.5 seconds animation
    const intervalTime = 70 // 70ms
    let elapsed = 0
    
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.participants.length)
      this.drawingName = this.participants[randomIndex]
      elapsed += intervalTime
      
      if (elapsed >= duration) {
        clearInterval(interval)
        this.finishDraw()
      }
    }, intervalTime)
  }

  private finishDraw() {
    const pool = [...this.participants]
    const selectedWinners: string[] = []
    const selectedSubstitutes: string[] = []
    
    // Pick winners
    for (let i = 0; i < this.winnersCount; i++) {
      if (pool.length === 0) break
      const randomIndex = Math.floor(Math.random() * pool.length)
      selectedWinners.push(pool.splice(randomIndex, 1)[0])
    }
    
    // Pick substitutes
    for (let i = 0; i < this.substitutesCount; i++) {
      if (pool.length === 0) break
      const randomIndex = Math.floor(Math.random() * pool.length)
      selectedSubstitutes.push(pool.splice(randomIndex, 1)[0])
    }
    
    this.winners = selectedWinners
    this.substitutes = selectedSubstitutes
    this.isDrawing = false
    
    // Add to history
    const entry: HistoryEntry = {
      id: Math.random().toString(36).substring(2, 9),
      title: this.title.trim() || 'Hızlı Çekiliş',
      date: new Date().toLocaleString('tr-TR'),
      winners: this.winners,
      substitutes: this.substitutes,
      winnersCount: this.winnersCount,
      substitutesCount: this.substitutesCount,
      participantsCount: this.participants.length
    }
    
    this.history.unshift(entry)
    this.saveToLocalStorage()

    // Dispatch custom event to trigger confetti in UI
    window.dispatchEvent(new CustomEvent('raffle-complete'))
  }
}

export default new RaffleStore()
