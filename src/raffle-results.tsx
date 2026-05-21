interface RaffleResultsProps {
  title: string
  winners: string[]
  substitutes: string[]
  onReset: () => void
}

export default function RaffleResults({ title, winners, substitutes, onReset }: RaffleResultsProps) {
  const copyToClipboard = () => {
    let text = `🎉 **${title} Çekiliş Sonuçları** 🎉\n\n`
    
    text += `🏆 ASİL KAZANANLAR:\n`
    winners.forEach((winner, i) => {
      text += `  ${i + 1}. ${winner}\n`
    })
    
    if (substitutes.length > 0) {
      text += `\n🎯 YEDEK KAZANANLAR:\n`
      substitutes.forEach((sub, i) => {
        text += `  ${i + 1}. ${sub}\n`
      })
    }
    
    text += `\n📅 Tarih: ${new Date().toLocaleString('tr-TR')}\n`
    text += `Görüşmek üzere!`

    navigator.clipboard.writeText(text)
      .then(() => alert('Sonuçlar panoya kopyalandı! 📋'))
      .catch(() => alert('Kopyalama başarısız oldu.'))
  }

  return (
    <section class="results-container animate-fade-in">
      <div class="results-header">
        <div class="success-badge">Çekiliş Tamamlandı!</div>
        <h2>{title}</h2>
      </div>

      <div class="results-lists">
        {/* Winners List */}
        <div class="results-group winners-group">
          <h3>
            <span class="emoji-icon">🏆</span> Asil Kazananlar
          </h3>
          <ol class="winner-list">
            {winners.map((winner, index) => (
              <li class="winner-item" key={index}>
                <span class="rank-badge">{index + 1}</span>
                <span class="winner-name">{winner}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Substitutes List (Optional) */}
        {substitutes.length > 0 && (
          <div class="results-group substitutes-group">
            <h3>
              <span class="emoji-icon">🎯</span> Yedek Kazananlar
            </h3>
            <ol class="substitute-list">
              {substitutes.map((sub, index) => (
                <li class="substitute-item" key={index}>
                  <span class="rank-badge rank-sub">{index + 1}</span>
                  <span class="substitute-name">{sub}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <div class="results-actions">
        <button class="button button-muted" click={copyToClipboard}>
          Sonuçları Kopyala
        </button>
        <button class="button button-primary" click={onReset}>
          Yeni Çekiliş
        </button>
      </div>
    </section>
  )
}
