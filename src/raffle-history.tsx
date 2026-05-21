import { HistoryEntry } from './raffle-store'

interface RaffleHistoryProps {
  history: HistoryEntry[]
  onDeleteEntry: (id: string) => void
  onClearHistory: () => void
}

export default function RaffleHistory({ history, onDeleteEntry, onClearHistory }: RaffleHistoryProps) {
  if (history.length === 0) {
    return (
      <div class="history-empty animate-fade-in">
        <div class="empty-icon">📅</div>
        <h3>Henüz Çekiliş Yapılmadı</h3>
        <p>Yapılan çekilişlerin sonuçları burada saklanacaktır.</p>
      </div>
    )
  }

  return (
    <div class="history-container animate-fade-in">
      <div class="history-header">
        <h2>Çekiliş Geçmişi ({history.length})</h2>
        <button class="button button-danger button-sm" click={onClearHistory}>
          Tümünü Temizle
        </button>
      </div>

      <div class="history-list">
        {history.map((entry) => (
          <div class="history-card" key={entry.id}>
            <div class="history-card-header">
              <div class="history-card-title-group">
                <span class="history-card-title">{entry.title}</span>
                <span class="history-card-date">{entry.date}</span>
              </div>
              <button 
                class="btn-delete" 
                click={() => onDeleteEntry(entry.id)}
                title="Çekilişi sil"
              >
                &times;
              </button>
            </div>
            
            <div class="history-card-meta">
              <span>👥 {entry.participantsCount} Katılımcı</span>
              <span>🏆 {entry.winnersCount} Asil</span>
              {entry.substitutesCount > 0 && <span>🎯 {entry.substitutesCount} Yedek</span>}
            </div>

            <div class="history-card-results">
              <div class="history-results-section">
                <span class="result-label">Asiller:</span>
                <span class="result-values">{entry.winners.join(', ')}</span>
              </div>
              
              {entry.substitutes.length > 0 && (
                <div class="history-results-section">
                  <span class="result-label">Yedekler:</span>
                  <span class="result-values">{entry.substitutes.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
