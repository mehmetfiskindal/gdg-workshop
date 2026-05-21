import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/app.tsx");import { Component } from "/node_modules/.vite/deps/@geajs_core.js?v=0710eaea";
import confetti from "/node_modules/.vite/deps/canvas-confetti.js?v=58fcf2f5";
import raffleStore from "/src/raffle-store.ts";
import __hmr_RaffleResults from "/src/raffle-results.tsx";
var _jsxFileName = "/Users/mehmetfiskindal/gdg-workshop/src/app.tsx";
import { jsxDEV as _jsxDEV } from "/node_modules/.vite/deps/@geajs_core_jsx-dev-runtime.js?v=66aed9c7";
const RaffleResults = createHotComponentProxy(new URL("/src/raffle-results.tsx", '' + import.meta.url).href, __hmr_RaffleResults);
import __hmr_RaffleHistory from "/src/raffle-history.tsx";
const RaffleHistory = createHotComponentProxy(new URL("/src/raffle-history.tsx", '' + import.meta.url).href, __hmr_RaffleHistory);
import { handleComponentUpdate, registerHotModule, registerComponentInstance, unregisterComponentInstance, createHotComponentProxy } from "/@id/__x00__virtual:gea-hmr";
export default class App extends Component {
	constructor(..._args) {
		super(..._args);
		this.currentTab = "draw";
		this.singleInput = "";
		this.bulkInput = "";
		this.showBulkImport = false;
		this.handleConfetti = () => {
			// Blast confetti from left, right, and center
			const duration = 2 * 1e3;
			const end = Date.now() + duration;
			const frame = () => {
				confetti({
					particleCount: 4,
					angle: 60,
					spread: 55,
					origin: { x: 0 }
				});
				confetti({
					particleCount: 4,
					angle: 120,
					spread: 55,
					origin: { x: 1 }
				});
				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			};
			// Center blast
			confetti({
				particleCount: 150,
				spread: 80,
				origin: { y: .6 }
			});
			frame();
		};
		this.handleSingleInput = (e) => {
			this.singleInput = e.target.value;
		};
		this.handleBulkInput = (e) => {
			this.bulkInput = e.target.value;
		};
		this.addSingleParticipant = (e) => {
			e.preventDefault();
			const name = this.singleInput.trim();
			if (name) {
				if (raffleStore.participants.includes(name)) {
					alert("Bu katılımcı zaten listede ekli!");
					return;
				}
				raffleStore.addParticipant(name);
				this.singleInput = "";
			}
		};
		this.toggleBulkImport = () => {
			this.showBulkImport = !this.showBulkImport;
		};
		this.importBulkParticipants = (e) => {
			e.preventDefault();
			if (this.bulkInput.trim()) {
				raffleStore.importParticipants(this.bulkInput);
				this.bulkInput = "";
				this.showBulkImport = false;
			}
		};
	}
	created() {
		window.addEventListener("raffle-complete", this.handleConfetti);
	}
	dispose() {
		window.removeEventListener("raffle-complete", this.handleConfetti);
		super.dispose();
	}
	setTab(tab) {
		this.currentTab = tab;
	}
	render() {
		return /* @__PURE__ */ _jsxDEV("div", {
			class: "gea-app",
			children: [/* @__PURE__ */ _jsxDEV("header", {
				class: "app-header",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					class: "logo-area",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						class: "logo-emoji",
						children: "🎁"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						class: "logo-text",
						children: [/* @__PURE__ */ _jsxDEV("h1", { children: "Çekiliş Dünyası" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", { children: "Gemini ve Gea ile Güçlendirilmiş" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("nav", {
					class: "app-tabs",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						class: `tab-button ${this.currentTab === "draw" ? "active" : ""}`,
						click: () => this.setTab("draw"),
						children: "🎉 Çekiliş Yap"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						class: `tab-button ${this.currentTab === "history" ? "active" : ""}`,
						click: () => this.setTab("history"),
						children: ["📅 Çekiliş Geçmişi", raffleStore.history.length > 0 && /* @__PURE__ */ _jsxDEV("span", {
							class: "badge",
							children: raffleStore.history.length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 50
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("main", {
				class: "app-main-content",
				children: [this.currentTab === "draw" && /* @__PURE__ */ _jsxDEV("div", {
					class: "draw-view animate-fade-in",
					children: /* @__PURE__ */ _jsxDEV("div", {
						class: "grid-layout",
						children: [/* @__PURE__ */ _jsxDEV("section", {
							class: "setup-panel card",
							children: [
								/* @__PURE__ */ _jsxDEV("h2", {
									class: "section-title",
									children: "⚙️ Çekiliş Kurulumu"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									class: "form-group",
									children: [/* @__PURE__ */ _jsxDEV("label", { children: "Çekiliş Başlığı" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: raffleStore.title,
										input: (e) => raffleStore.title = e.target.value,
										placeholder: "Örn: GDG Workshop Çekilişi"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									class: "row-group",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										class: "form-group",
										children: [/* @__PURE__ */ _jsxDEV("label", { children: "Asil Kazanan" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 129,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("input", {
											type: "number",
											min: "1",
											max: Math.max(1, raffleStore.participants.length),
											value: raffleStore.winnersCount,
											input: (e) => raffleStore.winnersCount = parseInt(e.target.value) || 1
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 130,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										class: "form-group",
										children: [/* @__PURE__ */ _jsxDEV("label", { children: "Yedek Kazanan" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 133,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("input", {
											type: "number",
											min: "0",
											max: Math.max(0, raffleStore.participants.length - raffleStore.winnersCount),
											value: raffleStore.substitutesCount,
											input: (e) => raffleStore.substitutesCount = parseInt(e.target.value) || 0
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 134,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("hr", { class: "separator" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									class: "participants-header",
									children: [/* @__PURE__ */ _jsxDEV("h3", { children: [
										"👥 Katılımcılar (",
										raffleStore.participants.length,
										")"
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										class: "participants-actions",
										children: [/* @__PURE__ */ _jsxDEV("button", {
											class: "link-button text-danger",
											click: raffleStore.clearParticipants,
											children: "Temizle"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 144,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											class: "link-button text-accent",
											click: raffleStore.resetParticipantsToDefault,
											children: "Varsayılanı Yükle"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 145,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("form", {
									class: "add-form",
									submit: this.addSingleParticipant,
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: this.singleInput,
										input: this.handleSingleInput,
										placeholder: "Katılımcı adı yazın..."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										class: "button button-primary",
										type: "submit",
										children: "Ekle"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									class: "bulk-trigger-container",
									children: /* @__PURE__ */ _jsxDEV("button", {
										class: "button button-muted button-sm w-full",
										click: this.toggleBulkImport,
										children: this.showBulkImport ? "✕ Toplu Ekleme Kapat" : "✍️ Toplu Katılımcı Ekle"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 156,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 19
								}, this),
								this.showBulkImport && /* @__PURE__ */ _jsxDEV("form", {
									class: "bulk-form animate-slide-down",
									submit: this.importBulkParticipants,
									children: [
										/* @__PURE__ */ _jsxDEV("label", { children: "Her satıra bir isim gelecek şekilde yapıştırın:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 162,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("textarea", {
											rows: 6,
											value: this.bulkInput,
											input: this.handleBulkInput,
											placeholder: "Örn:\nAhmet Yılmaz\nMehmet Demir\nAyşe Kaya"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 163,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											class: "button button-primary w-full",
											type: "submit",
											children: "Listeyi İçe Aktar"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 164,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 43
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									class: "participants-list-container",
									children: raffleStore.participants.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
										class: "list-empty",
										children: /* @__PURE__ */ _jsxDEV("p", { children: "Katılımcı listesi boş. Lütfen katılımcı ekleyin veya varsayılan listeyi yükleyin." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 170,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 62
									}, this) : /* @__PURE__ */ _jsxDEV("div", {
										class: "participants-scroll",
										children: raffleStore.participants.map((p, index) => /* @__PURE__ */ _jsxDEV("div", {
											class: "participant-row",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													class: "participant-num",
													children: ["#", index + 1]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 173,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													class: "participant-name",
													children: p
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 174,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ _jsxDEV("button", {
													class: "btn-remove",
													click: () => raffleStore.removeParticipant(index),
													title: "Sil",
													children: "×"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 175,
													columnNumber: 29
												}, this)
											]
										}, p, true, {
											fileName: _jsxFileName,
											lineNumber: 172,
											columnNumber: 69
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 32
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("section", {
							class: "drawing-panel card",
							children: raffleStore.isDrawing ? /* @__PURE__ */ _jsxDEV("div", {
								class: "drawing-display animate-pulse-glow",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										class: "spinning-ring-container",
										children: [
											/* @__PURE__ */ _jsxDEV("div", { class: "spinning-ring ring-outer" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 188,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", { class: "spinning-ring ring-middle" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 189,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", { class: "spinning-ring ring-inner" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 190,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												class: "drawing-icon",
												children: "🎰"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 191,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										class: "drawing-names-scroller",
										children: /* @__PURE__ */ _jsxDEV("span", {
											class: "scrolling-name",
											children: raffleStore.drawingName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 194,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										class: "drawing-status",
										children: "Kazananlar Seçiliyor..."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 15
							}, this) : raffleStore.winners.length > 0 ? /* @__PURE__ */ _jsxDEV(RaffleResults, {
								title: raffleStore.title,
								winners: raffleStore.winners,
								substitutes: raffleStore.substitutes,
								onReset: () => raffleStore.resetDraw()
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV("div", {
								class: "drawing-idle",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										class: "idle-illustration",
										children: "✨"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("h2", { children: "Çekilişe Hazır!" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										class: "draw-specs",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												class: "spec-card",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													class: "spec-value",
													children: raffleStore.participants.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 205,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													class: "spec-label",
													children: "Katılımcı"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 206,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 204,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												class: "spec-card spec-highlight",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													class: "spec-value",
													children: raffleStore.winnersCount
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 209,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													class: "spec-label",
													children: "Asil Kazanan"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 210,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 208,
												columnNumber: 25
											}, this),
											raffleStore.substitutesCount > 0 && /* @__PURE__ */ _jsxDEV("div", {
												class: "spec-card spec-sub",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													class: "spec-value",
													children: raffleStore.substitutesCount
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 213,
													columnNumber: 29
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													class: "spec-label",
													children: "Yedek Kazanan"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 214,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 212,
												columnNumber: 62
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										class: "button button-draw",
										disabled: raffleStore.participants.length < raffleStore.winnersCount + raffleStore.substitutesCount,
										click: () => raffleStore.draw(),
										children: "⚡ ÇEKİLİŞİ BAŞLAT ⚡"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 23
									}, this),
									raffleStore.participants.length < raffleStore.winnersCount + raffleStore.substitutesCount && /* @__PURE__ */ _jsxDEV("p", {
										class: "error-notice",
										children: [
											"⚠️ Çekiliş başlatmak için yeterli katılımcı yok (Gereken: ",
											raffleStore.winnersCount + raffleStore.substitutesCount,
											")."
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 222,
										columnNumber: 117
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 42
				}, this), this.currentTab === "history" && /* @__PURE__ */ _jsxDEV(RaffleHistory, {
					history: raffleStore.history,
					onDeleteEntry: (id) => raffleStore.deleteHistoryEntry(id),
					onClearHistory: () => raffleStore.clearHistory()
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 45
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 12
		}, this);
	}
	template() {
		return this.render();
	}
}
if (import.meta.hot) {
	const __moduleExports = { default: App };
	registerHotModule(import.meta.url, __moduleExports);
	import.meta.hot.accept((newModule) => {
		const __updatedModule = newModule || __moduleExports;
		registerHotModule(import.meta.url, __updatedModule);
		handleComponentUpdate(import.meta.url, { default: __updatedModule.default });
	});
	const __origCreated = App.prototype.created;
	App.prototype.created = function(__geaProps) {
		registerComponentInstance("App", this);
		return __origCreated.call(this, __geaProps);
	};
	const __origDispose = App.prototype.dispose;
	App.prototype.dispose = function() {
		unregisterComponentInstance("App", this);
		return __origDispose.call(this);
	};
}

//# sourceMappingURL=data:application/json;base64,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QU8wRSxjQUFzQkcsS0FBSyxNQUFNRCxVQUFVO0NBQ3BEO0NBSE4sTUFBTUUsZ0JBQXdCNUUsSUFBc0J5RSxVQUFVMUM7Q0FBOUQvQixJQUFzQnlFLFVBQVUxQyxVQUFVLFdBQVc7RUFDN0NoQyw0QkFBNEIsT0FBTyxJQUFJO0VBQ3ZDLE9BQU82RSxjQUFzQkQsS0FBSyxJQUFJO0NBQ3hDO0FBQUUiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb25mZXR0aSIsInJhZmZsZVN0b3JlIiwiUmFmZmxlUmVzdWx0cyIsImNyZWF0ZUhvdENvbXBvbmVudFByb3h5IiwiVVJMIiwiaW1wb3J0IiwibWV0YSIsInVybCIsImhyZWYiLCJfX2htcl9SYWZmbGVSZXN1bHRzIiwiUmFmZmxlSGlzdG9yeSIsIl9faG1yX1JhZmZsZUhpc3RvcnkiLCJoYW5kbGVDb21wb25lbnRVcGRhdGUiLCJyZWdpc3RlckhvdE1vZHVsZSIsInJlZ2lzdGVyQ29tcG9uZW50SW5zdGFuY2UiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50SW5zdGFuY2UiLCJBcHAiLCJkdXJhdGlvbiIsImVuZCIsIkRhdGUiLCJub3ciLCJmcmFtZSIsInBhcnRpY2xlQ291bnQiLCJhbmdsZSIsInNwcmVhZCIsIm9yaWdpbiIsIngiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ5IiwiZSIsInNpbmdsZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJidWxrSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0cmltIiwicGFydGljaXBhbnRzIiwiaW5jbHVkZXMiLCJhbGVydCIsImFkZFBhcnRpY2lwYW50Iiwic2hvd0J1bGtJbXBvcnQiLCJpbXBvcnRQYXJ0aWNpcGFudHMiLCJjcmVhdGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbmZldHRpIiwiZGlzcG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUYWIiLCJ0YWIiLCJjdXJyZW50VGFiIiwicmVuZGVyIiwiaGlzdG9yeSIsImxlbmd0aCIsInRpdGxlIiwiTWF0aCIsIm1heCIsIndpbm5lcnNDb3VudCIsInBhcnNlSW50Iiwic3Vic3RpdHV0ZXNDb3VudCIsImNsZWFyUGFydGljaXBhbnRzIiwicmVzZXRQYXJ0aWNpcGFudHNUb0RlZmF1bHQiLCJhZGRTaW5nbGVQYXJ0aWNpcGFudCIsImhhbmRsZVNpbmdsZUlucHV0IiwidG9nZ2xlQnVsa0ltcG9ydCIsImltcG9ydEJ1bGtQYXJ0aWNpcGFudHMiLCJoYW5kbGVCdWxrSW5wdXQiLCJtYXAiLCJwIiwiaW5kZXgiLCJyZW1vdmVQYXJ0aWNpcGFudCIsImlzRHJhd2luZyIsImRyYXdpbmdOYW1lIiwid2lubmVycyIsInN1YnN0aXR1dGVzIiwicmVzZXREcmF3IiwiZHJhdyIsImlkIiwiZGVsZXRlSGlzdG9yeUVudHJ5IiwiY2xlYXJIaXN0b3J5IiwidGVtcGxhdGUiLCJob3QiLCJfX21vZHVsZUV4cG9ydHMiLCJkZWZhdWx0IiwiYWNjZXB0IiwibmV3TW9kdWxlIiwiX191cGRhdGVkTW9kdWxlIiwiX19vcmlnQ3JlYXRlZCIsInByb3RvdHlwZSIsIl9fZ2VhUHJvcHMiLCJjYWxsIiwiX19vcmlnRGlzcG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0BnZWFqcy9jb3JlJ1xuaW1wb3J0IGNvbmZldHRpIGZyb20gJ2NhbnZhcy1jb25mZXR0aSdcbmltcG9ydCByYWZmbGVTdG9yZSBmcm9tICcuL3JhZmZsZS1zdG9yZSdcbmltcG9ydCBSYWZmbGVSZXN1bHRzIGZyb20gJy4vcmFmZmxlLXJlc3VsdHMnXG5pbXBvcnQgUmFmZmxlSGlzdG9yeSBmcm9tICcuL3JhZmZsZS1oaXN0b3J5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjdXJyZW50VGFiID0gJ2RyYXcnXG4gIHNpbmdsZUlucHV0ID0gJydcbiAgYnVsa0lucHV0ID0gJydcbiAgc2hvd0J1bGtJbXBvcnQgPSBmYWxzZVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3JhZmZsZS1jb21wbGV0ZScsIHRoaXMuaGFuZGxlQ29uZmV0dGkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyYWZmbGUtY29tcGxldGUnLCB0aGlzLmhhbmRsZUNvbmZldHRpKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlQ29uZmV0dGkgPSAoKSA9PiB7XG4gICAgLy8gQmxhc3QgY29uZmV0dGkgZnJvbSBsZWZ0LCByaWdodCwgYW5kIGNlbnRlclxuICAgIGNvbnN0IGR1cmF0aW9uID0gMiAqIDEwMDBcbiAgICBjb25zdCBlbmQgPSBEYXRlLm5vdygpICsgZHVyYXRpb25cblxuICAgIGNvbnN0IGZyYW1lID0gKCkgPT4ge1xuICAgICAgY29uZmV0dGkoe1xuICAgICAgICBwYXJ0aWNsZUNvdW50OiA0LFxuICAgICAgICBhbmdsZTogNjAsXG4gICAgICAgIHNwcmVhZDogNTUsXG4gICAgICAgIG9yaWdpbjogeyB4OiAwIH1cbiAgICAgIH0pXG4gICAgICBjb25mZXR0aSh7XG4gICAgICAgIHBhcnRpY2xlQ291bnQ6IDQsXG4gICAgICAgIGFuZ2xlOiAxMjAsXG4gICAgICAgIHNwcmVhZDogNTUsXG4gICAgICAgIG9yaWdpbjogeyB4OiAxIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChEYXRlLm5vdygpIDwgZW5kKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSlcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQ2VudGVyIGJsYXN0XG4gICAgY29uZmV0dGkoe1xuICAgICAgcGFydGljbGVDb3VudDogMTUwLFxuICAgICAgc3ByZWFkOiA4MCxcbiAgICAgIG9yaWdpbjogeyB5OiAwLjYgfVxuICAgIH0pXG4gICAgXG4gICAgZnJhbWUoKVxuICB9XG5cbiAgc2V0VGFiKHRhYjogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiXG4gIH1cblxuICBoYW5kbGVTaW5nbGVJbnB1dCA9IChlOiBFdmVudCkgPT4ge1xuICAgIHRoaXMuc2luZ2xlSW5wdXQgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcbiAgfVxuXG4gIGhhbmRsZUJ1bGtJbnB1dCA9IChlOiBFdmVudCkgPT4ge1xuICAgIHRoaXMuYnVsa0lucHV0ID0gKGUudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlXG4gIH1cblxuICBhZGRTaW5nbGVQYXJ0aWNpcGFudCA9IChlOiBFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnNpbmdsZUlucHV0LnRyaW0oKVxuICAgIGlmIChuYW1lKSB7XG4gICAgICBpZiAocmFmZmxlU3RvcmUucGFydGljaXBhbnRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIGFsZXJ0KCdCdSBrYXTEsWzEsW1jxLEgemF0ZW4gbGlzdGVkZSBla2xpIScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmFmZmxlU3RvcmUuYWRkUGFydGljaXBhbnQobmFtZSlcbiAgICAgIHRoaXMuc2luZ2xlSW5wdXQgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ1bGtJbXBvcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93QnVsa0ltcG9ydCA9ICF0aGlzLnNob3dCdWxrSW1wb3J0XG4gIH1cblxuICBpbXBvcnRCdWxrUGFydGljaXBhbnRzID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMuYnVsa0lucHV0LnRyaW0oKSkge1xuICAgICAgcmFmZmxlU3RvcmUuaW1wb3J0UGFydGljaXBhbnRzKHRoaXMuYnVsa0lucHV0KVxuICAgICAgdGhpcy5idWxrSW5wdXQgPSAnJ1xuICAgICAgdGhpcy5zaG93QnVsa0ltcG9ydCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VhLWFwcFwiPlxuICAgICAgICB7LyogVG9wIEhlYWRlciAqL31cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby1hcmVhXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxvZ28tZW1vamlcIj7wn46BPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ28tdGV4dFwiPlxuICAgICAgICAgICAgICA8aDE+w4dla2lsacWfIETDvG55YXPEsTwvaDE+XG4gICAgICAgICAgICAgIDxwPkdlbWluaSB2ZSBHZWEgaWxlIEfDvMOnbGVuZGlyaWxtacWfPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwiYXBwLXRhYnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzPXtgdGFiLWJ1dHRvbiAke3RoaXMuY3VycmVudFRhYiA9PT0gJ2RyYXcnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4gdGhpcy5zZXRUYWIoJ2RyYXcnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J+OiSDDh2VraWxpxZ8gWWFwXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzPXtgdGFiLWJ1dHRvbiAke3RoaXMuY3VycmVudFRhYiA9PT0gJ2hpc3RvcnknID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4gdGhpcy5zZXRUYWIoJ2hpc3RvcnknKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J+ThSDDh2VraWxpxZ8gR2XDp21pxZ9pXG4gICAgICAgICAgICAgIHtyYWZmbGVTdG9yZS5oaXN0b3J5Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57cmFmZmxlU3RvcmUuaGlzdG9yeS5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHsvKiBNYWluIENvbnRlbnQgQXJlYSAqL31cbiAgICAgICAgPG1haW4gY2xhc3M9XCJhcHAtbWFpbi1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMuY3VycmVudFRhYiA9PT0gJ2RyYXcnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmF3LXZpZXcgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWxheW91dFwiPlxuICAgICAgICAgICAgICAgIHsvKiBMZWZ0IFNpZGU6IFNldHVwIFBhbmVsICovfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXAtcGFuZWwgY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuKame+4jyDDh2VraWxpxZ8gS3VydWx1bXU8L2gyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogVGl0bGUgaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+w4dla2lsacWfIEJhxZ9sxLHEn8SxPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhZmZsZVN0b3JlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXsoZTogRXZlbnQpID0+IHJhZmZsZVN0b3JlLnRpdGxlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw5ZybjogR0RHIFdvcmtzaG9wIMOHZWtpbGnFn2lcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBDb3VudHMgaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFzaWwgS2F6YW5hbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNYXRoLm1heCgxLCByYWZmbGVTdG9yZS5wYXJ0aWNpcGFudHMubGVuZ3RoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYWZmbGVTdG9yZS53aW5uZXJzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17KGU6IEV2ZW50KSA9PiByYWZmbGVTdG9yZS53aW5uZXJzQ291bnQgPSBwYXJzZUludCgoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpIHx8IDF9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlllZGVrIEthemFuYW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNYXRoLm1heCgwLCByYWZmbGVTdG9yZS5wYXJ0aWNpcGFudHMubGVuZ3RoIC0gcmFmZmxlU3RvcmUud2lubmVyc0NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYWZmbGVTdG9yZS5zdWJzdGl0dXRlc0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9eyhlOiBFdmVudCkgPT4gcmFmZmxlU3RvcmUuc3Vic3RpdHV0ZXNDb3VudCA9IHBhcnNlSW50KChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkgfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJzZXBhcmF0b3JcIiAvPlxuXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIHBhcnRpY2lwYW50ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRpY2lwYW50cy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPvCfkaUgS2F0xLFsxLFtY8SxbGFyICh7cmFmZmxlU3RvcmUucGFydGljaXBhbnRzLmxlbmd0aH0pPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRpY2lwYW50cy1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmstYnV0dG9uIHRleHQtZGFuZ2VyXCIgY2xpY2s9e3JhZmZsZVN0b3JlLmNsZWFyUGFydGljaXBhbnRzfT5UZW1pemxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmstYnV0dG9uIHRleHQtYWNjZW50XCIgY2xpY2s9e3JhZmZsZVN0b3JlLnJlc2V0UGFydGljaXBhbnRzVG9EZWZhdWx0fT5WYXJzYXnEsWxhbsSxIFnDvGtsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIHBhcnRpY2lwYW50IGlucHV0cyAqL31cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiYWRkLWZvcm1cIiBzdWJtaXQ9e3RoaXMuYWRkU2luZ2xlUGFydGljaXBhbnR9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zaW5nbGVJbnB1dH0gXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3RoaXMuaGFuZGxlU2luZ2xlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLYXTEsWzEsW1jxLEgYWTEsSB5YXrEsW4uLi5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPkVrbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1bGstdHJpZ2dlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tbXV0ZWQgYnV0dG9uLXNtIHctZnVsbFwiIGNsaWNrPXt0aGlzLnRvZ2dsZUJ1bGtJbXBvcnR9PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dCdWxrSW1wb3J0ID8gJ+KclSBUb3BsdSBFa2xlbWUgS2FwYXQnIDogJ+Kcje+4jyBUb3BsdSBLYXTEsWzEsW1jxLEgRWtsZSd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dCdWxrSW1wb3J0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJidWxrLWZvcm0gYW5pbWF0ZS1zbGlkZS1kb3duXCIgc3VibWl0PXt0aGlzLmltcG9ydEJ1bGtQYXJ0aWNpcGFudHN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5IZXIgc2F0xLFyYSBiaXIgaXNpbSBnZWxlY2VrIMWfZWtpbGRlIHlhcMSxxZ90xLFyxLFuOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmJ1bGtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt0aGlzLmhhbmRsZUJ1bGtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw5ZybjomIzEwO0FobWV0IFnEsWxtYXomIzEwO01laG1ldCBEZW1pciYjMTA7QXnFn2UgS2F5YVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IHctZnVsbFwiIHR5cGU9XCJzdWJtaXRcIj5MaXN0ZXlpIMSww6dlIEFrdGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBQYXJ0aWNpcGFudHMgTGlzdCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0aWNpcGFudHMtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3JhZmZsZVN0b3JlLnBhcnRpY2lwYW50cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZW1wdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkthdMSxbMSxbWPEsSBsaXN0ZXNpIGJvxZ8uIEzDvHRmZW4ga2F0xLFsxLFtY8SxIGVrbGV5aW4gdmV5YSB2YXJzYXnEsWxhbiBsaXN0ZXlpIHnDvGtsZXlpbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRpY2lwYW50cy1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyYWZmbGVTdG9yZS5wYXJ0aWNpcGFudHMubWFwKChwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydGljaXBhbnQtcm93XCIga2V5PXtwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcnRpY2lwYW50LW51bVwiPiN7aW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcnRpY2lwYW50LW5hbWVcIj57cH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLXJlbW92ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHJhZmZsZVN0b3JlLnJlbW92ZVBhcnRpY2lwYW50KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgU2lkZTogRHJhd2luZyBCb3ggKi99XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkcmF3aW5nLXBhbmVsIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIHtyYWZmbGVTdG9yZS5pc0RyYXdpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdGl2ZSBkcmF3aW5nIHN0YXRlICovXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmF3aW5nLWRpc3BsYXkgYW5pbWF0ZS1wdWxzZS1nbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uaW5nLXJpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5pbmctcmluZyByaW5nLW91dGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5pbmctcmluZyByaW5nLW1pZGRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uaW5nLXJpbmcgcmluZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYXdpbmctaWNvblwiPvCfjrA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJhd2luZy1uYW1lcy1zY3JvbGxlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY3JvbGxpbmctbmFtZVwiPntyYWZmbGVTdG9yZS5kcmF3aW5nTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkcmF3aW5nLXN0YXR1c1wiPkthemFuYW5sYXIgU2XDp2lsaXlvci4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogcmFmZmxlU3RvcmUud2lubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAvKiBSZXN1bHRzIHN0YXRlICovXG4gICAgICAgICAgICAgICAgICAgIDxSYWZmbGVSZXN1bHRzIFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtyYWZmbGVTdG9yZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICB3aW5uZXJzPXtyYWZmbGVTdG9yZS53aW5uZXJzfVxuICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVzPXtyYWZmbGVTdG9yZS5zdWJzdGl0dXRlc31cbiAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0PXsoKSA9PiByYWZmbGVTdG9yZS5yZXNldERyYXcoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIC8qIEVtcHR5L0RlZmF1bHQgc3RhdGUgcmVhZHkgdG8gZHJhdyAqL1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJhd2luZy1pZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlkbGUtaWxsdXN0cmF0aW9uXCI+4pyoPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPsOHZWtpbGnFn2UgSGF6xLFyITwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYXctc3BlY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGVjLXZhbHVlXCI+e3JhZmZsZVN0b3JlLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwZWMtbGFiZWxcIj5LYXTEsWzEsW1jxLE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLWNhcmQgc3BlYy1oaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGVjLXZhbHVlXCI+e3JhZmZsZVN0b3JlLndpbm5lcnNDb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3BlYy1sYWJlbFwiPkFzaWwgS2F6YW5hbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JhZmZsZVN0b3JlLnN1YnN0aXR1dGVzQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWMtY2FyZCBzcGVjLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3BlYy12YWx1ZVwiPntyYWZmbGVTdG9yZS5zdWJzdGl0dXRlc0NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwZWMtbGFiZWxcIj5ZZWRlayBLYXphbmFuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLWRyYXdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyYWZmbGVTdG9yZS5wYXJ0aWNpcGFudHMubGVuZ3RoIDwgKHJhZmZsZVN0b3JlLndpbm5lcnNDb3VudCArIHJhZmZsZVN0b3JlLnN1YnN0aXR1dGVzQ291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHJhZmZsZVN0b3JlLmRyYXcoKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDimqEgw4dFS8SwTMSwxZ7EsCBCQcWeTEFUIOKaoVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAge3JhZmZsZVN0b3JlLnBhcnRpY2lwYW50cy5sZW5ndGggPCAocmFmZmxlU3RvcmUud2lubmVyc0NvdW50ICsgcmFmZmxlU3RvcmUuc3Vic3RpdHV0ZXNDb3VudCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1ub3RpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg4pqg77iPIMOHZWtpbGnFnyBiYcWfbGF0bWFrIGnDp2luIHlldGVybGkga2F0xLFsxLFtY8SxIHlvayAoR2VyZWtlbjoge3JhZmZsZVN0b3JlLndpbm5lcnNDb3VudCArIHJhZmZsZVN0b3JlLnN1YnN0aXR1dGVzQ291bnR9KS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7dGhpcy5jdXJyZW50VGFiID09PSAnaGlzdG9yeScgJiYgKFxuICAgICAgICAgICAgPFJhZmZsZUhpc3RvcnkgXG4gICAgICAgICAgICAgIGhpc3Rvcnk9e3JhZmZsZVN0b3JlLmhpc3Rvcnl9XG4gICAgICAgICAgICAgIG9uRGVsZXRlRW50cnk9eyhpZCkgPT4gcmFmZmxlU3RvcmUuZGVsZXRlSGlzdG9yeUVudHJ5KGlkKX1cbiAgICAgICAgICAgICAgb25DbGVhckhpc3Rvcnk9eygpID0+IHJhZmZsZVN0b3JlLmNsZWFySGlzdG9yeSgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoKVxuICB9XG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9tZWhtZXRmaXNraW5kYWwvZ2RnLXdvcmtzaG9wL3NyYy9hcHAudHN4In0=