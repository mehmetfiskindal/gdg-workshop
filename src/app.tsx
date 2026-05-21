import { Component } from '@geajs/core'
import confetti from 'canvas-confetti'
import raffleStore from './raffle-store'
import RaffleResults from './raffle-results'
import RaffleHistory from './raffle-history'

export default class App extends Component {
  currentTab = 'draw'
  singleInput = ''
  bulkInput = ''
  showBulkImport = false

  created() {
    window.addEventListener('raffle-complete', this.handleConfetti)
  }

  dispose() {
    window.removeEventListener('raffle-complete', this.handleConfetti)
    super.dispose()
  }

  handleConfetti = () => {
    // Blast confetti from left, right, and center
    const duration = 2 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    
    // Center blast
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    })
    
    frame()
  }

  setTab(tab: string) {
    this.currentTab = tab
  }

  handleSingleInput = (e: Event) => {
    this.singleInput = (e.target as HTMLInputElement).value
  }

  handleBulkInput = (e: Event) => {
    this.bulkInput = (e.target as HTMLTextAreaElement).value
  }

  addSingleParticipant = (e: Event) => {
    e.preventDefault()
    const name = this.singleInput.trim()
    if (name) {
      if (raffleStore.participants.includes(name)) {
        alert('Bu katılımcı zaten listede ekli!')
        return
      }
      raffleStore.addParticipant(name)
      this.singleInput = ''
    }
  }

  toggleBulkImport = () => {
    this.showBulkImport = !this.showBulkImport
  }

  importBulkParticipants = (e: Event) => {
    e.preventDefault()
    if (this.bulkInput.trim()) {
      raffleStore.importParticipants(this.bulkInput)
      this.bulkInput = ''
      this.showBulkImport = false
    }
  }

  template() {
    return (
      <div class="gea-app">
        {/* Top Header */}
        <header class="app-header">
          <div class="logo-area">
            <span class="logo-emoji">🎁</span>
            <div class="logo-text">
              <h1>Çekiliş Dünyası</h1>
              <p>Gemini ve Gea ile Güçlendirilmiş</p>
            </div>
          </div>

          <nav class="app-tabs">
            <button 
              class={`tab-button ${this.currentTab === 'draw' ? 'active' : ''}`}
              click={() => this.setTab('draw')}
            >
              🎉 Çekiliş Yap
            </button>
            <button 
              class={`tab-button ${this.currentTab === 'history' ? 'active' : ''}`}
              click={() => this.setTab('history')}
            >
              📅 Çekiliş Geçmişi
              {raffleStore.history.length > 0 && (
                <span class="badge">{raffleStore.history.length}</span>
              )}
            </button>
          </nav>
        </header>

        {/* Main Content Area */}
        <main class="app-main-content">
          {this.currentTab === 'draw' && (
            <div class="draw-view animate-fade-in">
              <div class="grid-layout">
                {/* Left Side: Setup Panel */}
                <section class="setup-panel card">
                  <h2 class="section-title">⚙️ Çekiliş Kurulumu</h2>
                  
                  {/* Title input */}
                  <div class="form-group">
                    <label>Çekiliş Başlığı</label>
                    <input 
                      type="text" 
                      value={raffleStore.title}
                      input={(e: Event) => raffleStore.title = (e.target as HTMLInputElement).value}
                      placeholder="Örn: GDG Workshop Çekilişi"
                    />
                  </div>

                  {/* Counts input */}
                  <div class="row-group">
                    <div class="form-group">
                      <label>Asil Kazanan</label>
                      <input 
                        type="number" 
                        min="1" 
                        max={Math.max(1, raffleStore.participants.length)}
                        value={raffleStore.winnersCount}
                        input={(e: Event) => raffleStore.winnersCount = parseInt((e.target as HTMLInputElement).value) || 1}
                      />
                    </div>
                    <div class="form-group">
                      <label>Yedek Kazanan</label>
                      <input 
                        type="number" 
                        min="0"
                        max={Math.max(0, raffleStore.participants.length - raffleStore.winnersCount)}
                        value={raffleStore.substitutesCount}
                        input={(e: Event) => raffleStore.substitutesCount = parseInt((e.target as HTMLInputElement).value) || 0}
                      />
                    </div>
                  </div>

                  <hr class="separator" />

                  {/* Add participant */}
                  <div class="participants-header">
                    <h3>👥 Katılımcılar ({raffleStore.participants.length})</h3>
                    <div class="participants-actions">
                      <button class="link-button text-danger" click={raffleStore.clearParticipants}>Temizle</button>
                      <button class="link-button text-accent" click={raffleStore.resetParticipantsToDefault}>Varsayılanı Yükle</button>
                    </div>
                  </div>

                  {/* Add participant inputs */}
                  <form class="add-form" submit={this.addSingleParticipant}>
                    <input 
                      type="text" 
                      value={this.singleInput} 
                      input={this.handleSingleInput}
                      placeholder="Katılımcı adı yazın..."
                    />
                    <button class="button button-primary" type="submit">Ekle</button>
                  </form>

                  <div class="bulk-trigger-container">
                    <button class="button button-muted button-sm w-full" click={this.toggleBulkImport}>
                      {this.showBulkImport ? '✕ Toplu Ekleme Kapat' : '✍️ Toplu Katılımcı Ekle'}
                    </button>
                  </div>

                  {this.showBulkImport && (
                    <form class="bulk-form animate-slide-down" submit={this.importBulkParticipants}>
                      <label>Her satıra bir isim gelecek şekilde yapıştırın:</label>
                      <textarea 
                        rows={6}
                        value={this.bulkInput}
                        input={this.handleBulkInput}
                        placeholder="Örn:&#10;Ahmet Yılmaz&#10;Mehmet Demir&#10;Ayşe Kaya"
                      />
                      <button class="button button-primary w-full" type="submit">Listeyi İçe Aktar</button>
                    </form>
                  )}

                  {/* Participants List */}
                  <div class="participants-list-container">
                    {raffleStore.participants.length === 0 ? (
                      <div class="list-empty">
                        <p>Katılımcı listesi boş. Lütfen katılımcı ekleyin veya varsayılan listeyi yükleyin.</p>
                      </div>
                    ) : (
                      <div class="participants-scroll">
                        {raffleStore.participants.map((p, index) => (
                          <div class="participant-row" key={p}>
                            <span class="participant-num">#{index + 1}</span>
                            <span class="participant-name">{p}</span>
                            <button 
                              class="btn-remove" 
                              click={() => raffleStore.removeParticipant(index)}
                              title="Sil"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>

                {/* Right Side: Drawing Box */}
                <section class="drawing-panel card">
                  {raffleStore.isDrawing ? (
                    /* Active drawing state */
                    <div class="drawing-display animate-pulse-glow">
                      <div class="spinning-ring-container">
                        <div class="spinning-ring ring-outer"></div>
                        <div class="spinning-ring ring-middle"></div>
                        <div class="spinning-ring ring-inner"></div>
                        <div class="drawing-icon">🎰</div>
                      </div>
                      <div class="drawing-names-scroller">
                        <span class="scrolling-name">{raffleStore.drawingName}</span>
                      </div>
                      <p class="drawing-status">Kazananlar Seçiliyor...</p>
                    </div>
                  ) : raffleStore.winners.length > 0 ? (
                    /* Results state */
                    <RaffleResults 
                      title={raffleStore.title}
                      winners={raffleStore.winners}
                      substitutes={raffleStore.substitutes}
                      onReset={() => raffleStore.resetDraw()}
                    />
                  ) : (
                    /* Empty/Default state ready to draw */
                    <div class="drawing-idle">
                      <div class="idle-illustration">✨</div>
                      <h2>Çekilişe Hazır!</h2>
                      
                      <div class="draw-specs">
                        <div class="spec-card">
                          <span class="spec-value">{raffleStore.participants.length}</span>
                          <span class="spec-label">Katılımcı</span>
                        </div>
                        <div class="spec-card spec-highlight">
                          <span class="spec-value">{raffleStore.winnersCount}</span>
                          <span class="spec-label">Asil Kazanan</span>
                        </div>
                        {raffleStore.substitutesCount > 0 && (
                          <div class="spec-card spec-sub">
                            <span class="spec-value">{raffleStore.substitutesCount}</span>
                            <span class="spec-label">Yedek Kazanan</span>
                          </div>
                        )}
                      </div>

                      <button 
                        class="button button-draw" 
                        disabled={raffleStore.participants.length < (raffleStore.winnersCount + raffleStore.substitutesCount)}
                        click={() => raffleStore.draw()}
                      >
                        ⚡ ÇEKİLİŞİ BAŞLAT ⚡
                      </button>

                      {raffleStore.participants.length < (raffleStore.winnersCount + raffleStore.substitutesCount) && (
                        <p class="error-notice">
                          ⚠️ Çekiliş başlatmak için yeterli katılımcı yok (Gereken: {raffleStore.winnersCount + raffleStore.substitutesCount}).
                        </p>
                      )}
                    </div>
                  )}
                </section>
              </div>
            </div>
          )}

          {this.currentTab === 'history' && (
            <RaffleHistory 
              history={raffleStore.history}
              onDeleteEntry={(id) => raffleStore.deleteHistoryEntry(id)}
              onClearHistory={() => raffleStore.clearHistory()}
            />
          )}
        </main>
      </div>
    )
  }

}
