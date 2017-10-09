import flatMap from 'lib/flat-map.js'

const seriesPart = {
	ONE: seriesPartCounter(742),
	TWO: seriesPartCounter(745),
	THREE: seriesPartCounter(747),
	FOUR: seriesPartCounter(750),
	FIVE: seriesPartCounter(755),
	SIX: seriesPartCounter(754),
	SEVEN: seriesPartCounter(763),
	EIGHT: seriesPartCounter(762),
	NINE: seriesPartCounter(766),
	TEN: seriesPartCounter(765),
	ELEVEN: seriesPartCounter(769),
	TWELVE: seriesPartCounter(771),
	THIRTEEN: seriesPartCounter(773),
	FOURTEEN: seriesPartCounter(776),
}


function seriesPartCounter(sermonAudioId) {
	const object = {
		audioId: sermonAudioId,
		principleCount: 0,
	}

	return () => {
		object.principleCount++
		return object.principleCount === 1 ? object : undefined
	}
}

const verse = (number, texts) => ({ number, texts })
const text = (text, principles) => ({ text, principles })
const p = (principle, sermon) => ({ principle, sermon })

const verses = [
	verse(1, [
		text(`Jesus Christ’s revelation,`, [
			p(`Principle #1 - We must treat this book like a revelation or clear unveiling of truth (Ἀποκάλυψις - apokalupsis)`, seriesPart.ONE()),
			p(`Principle #2 - We must treat this book as a revelation about Jesus Christ`, seriesPart.ONE()),
		]),
		text(`which God gave Him`, [
			p(`Principle #3 - We must see this as an inspired message of God`, seriesPart.ONE()),
		]),
		text(`to show to His slaves—`, [
			p(`Principle #4 - God has freely shown the meaning of this book to all readers; it is not a secret "mystery" for a few (as in gnosticism) (cf. 1:1,3; 13:9; 2:7,11,17: 2:29; 3:6,13,22)`, seriesPart.ONE()),
			p(`Principle #5 - It is imperative that you understand and obey this book because these are Christ’s instructions to His “slaves”`, seriesPart.ONE()),
		]),
		text(`things that must occur shortly.`, [
			p(`Principle #6 - We must see this book as dealing with history`, seriesPart.ONE()),
			p(`Principle #7 - We must see this as predestined Providential History (δεῖ - “must”) - it addresses the question of "Who controls history?"`, seriesPart.ONE()),
			p(`Principle #8 - We must see the fulfillment or at least a partial fulfillment of all seven sections of Revelation as being "soon," "near," or "about to happen" (cf. 1:3,7,19; 2:5,10,16; 3:10,11; 6:11; 11:14; 22:6,7,10,12,20)`, seriesPart.ONE()),
		]),
		text(`And He communicated it,`, [
			p(`Principle #9 - We must see the historical events as being communicated via symbols (ἐσήμανεν - to communicate by symbols)`, seriesPart.TWO()),
		]),
		text(`sending it by His angel to His slave John,`, [
			p(`Principle #10 - We must see the role of angels as being critically important in world history (“angel”)`, seriesPart.THREE()),
			p(`Principle #11 - We must take into consideration the authorial intent of John`, seriesPart.THREE()),
		]),
	]),
	verse(2, [
		text(`who gave witness to the word of God, even the testimony of Jesus Christ—`, [
			p(`Principle #12 - We should see this book as a covenant lawsuit against the church (ch. 1-3 - but still vindicating the church), and against Israel (ch. 4-19) and Rome (ch. 13-19) (ἐμαρτύρησεν - legal witness)`, seriesPart.FOUR()),
			p(`Principle #13 - We must read the book of Revelation in light of the Old Testament and the earlier covenant lawsuit (μαρτυρίαν) of Jesus in the Gospels (“who gave witness [μαρτυρέω] to the word of God and to the testimony [μαρτυρίαν] of Jesus Christ”; cf. this phrase elsewhere in the book, v. 9, etc.)`, seriesPart.FIVE()),
		]),
		text(`the things that He saw, both things that are and those that must happen after these.`, [
			p(`Principle #14 - This is a book that contains a high degree of visualization, not simply analytical words and not simply symbols. Think of it like a play or a movie. (εἶδεν past tense of ὁράω - “saw” - 41 times in Revelation)`, seriesPart.SIX()),
			p(`Principle #15 - there is some already (“are”) and not yet (“those that must happen after these”) in verses 2,3 and 19 [v. 2 "και ατινα εισιν και α χρη γενεσθαι μετα ταυτα" occurs in the Majority Text.; v. 3 v. 19 - καὶ ἃ εἰσίν, καὶ ἃ μέλλει γίνεσθαι μετὰ ταῦτα]`, seriesPart.SIX()),
		]),
	]),
	verse(3, [
		text(`Blessed is he who reads and those who hear the words of the prophecy, and keep the things that are written in it; because the time is near.`, [
			p(`Principle #16 - when rightly understood, this book brings great encouragement to believers (“Blessed”)`, seriesPart.SEVEN()),
			p(`Principle #17 - this book is meant to be read aloud in the worship of the church ("read" = ἀναγινώσκω) and thus has a liturgical function`, seriesPart.SEVEN()),
			p(`Principle #18 - this book is a book on ethics ("hear…keep")`, seriesPart.SEVEN()),
			p(`Principle #19 - The whole book of Revelation is called a prophecy (cf. 22:7,10,18,19) and should be interpreted with the principles of the prophetic genre.`, seriesPart.EIGHT()),
			p(`Reiteration of Principle #8 - the time is near`, seriesPart.EIGHT()),
		]),
	]),
	verse(4, [
		text(`John, to the seven churches that are in Asia:`, [
			p(`Principle #20 - this book should be seen as especially relevant to the seven first century churches it was written to`, seriesPart.NINE()),
		]),
		text(`Grace and peace to you`, [
			p(`Principle #21 - Grace and Peace is a thematic element that holds the book together. Though the pronouncement of grace and peace is resisted by Satan, it will be fully accomplished by the end of the book (chapters 20-22)`, seriesPart.TEN()),
		]),
		text(`from Him who is and who was and who is coming, and from the seven-fold Spirit who is before His throne,`, [
			p(`Principle #22 - The Trinitarian God (v. 4c-5) is fully capable of providing the grace and peace needed to fulfill kingdom prophecies (see OT background in Zechariah 4, Isaiah 11, Psalm 89, etc.)`, seriesPart.TEN()),
		]),
	]),
	verse(5, [
		text(`and from Jesus Christ the faithful witness, the firstborn from among the dead, and the ruler of the kings of the earth.  To Him who loved us and washed us from our sins with His own blood`, [
			p(`Principle #23 - this book presents Jesus as currently being prophet, priest, and king`, seriesPart.TEN()),
		]),
	]),
	verse(6, [
		text(`—indeed, He made us a kingdom, priests to His God and Father—to Him be the glory and the dominion for ever and ever. Amen.`, [
			p(`Principle #24 - this book portrays the gradual advancement of redemption & kingdom`, seriesPart.TEN()),
		]),
	]),
	verse(7, [
		text(`Take note, He comes with the clouds, and every eye will see Him, including those who pierced Him. And all the tribes of the earth will beat their breasts [in dismay] because of Him. Yea, verily!`, [
			p(`Principle #25 - "Behold"/"Take note" is a clue that verse 7 is a central theme of this book. Since this is the only "Behold" in the introductory section (vv. 1-11), verse 7 may very well be the central theme (as Ken Gentry believes).`, seriesPart.ELEVEN()),
			p(`Principle #26 - An imminent (vv. 1,3,19; 2:5,16,25; 3:3,11,20; 5:7; etc.), visible, sorrow-inducing (v. 7d with Zech. 12:10-14) coming of Christ in sovereign judgment (v. 7b-e) is therefore a central theme of this book. (cf. identical langauge in 22:22; cf. chart of seven uses of the term "coming" in the New Testament)`, seriesPart.ELEVEN()),
			p(`Principle #27 - A redemptive judgment upon Rome and Israel (those who pierced Him) is therefore a central theme of the book, with the biggest emphasis being upon Israel ("all tribes of the land" in light of quote from Zech. 12:10-14). Since verse 7 alludes to Daniel 7:13-14 and Zech. 12:10-14, we should see a definition of "coming" that is consistent with those two passages. This is reinforced with the reference to "One like the Son of Man" (v. 13 with Dan. 7:13) and the coming in 22:22 which is "soon" (ταχύς).`, seriesPart.ELEVEN()),
			p(`Principle #28 - The background to verse 7 is our first hint that the word "earth" (γῆς) should be translated as "land" throughout the book. It is a reference to the land of Israel.`, seriesPart.ELEVEN()),
		]),
	]),
	verse(8, [
		text(`“I am the Alpha and the Omega”, says the Lord God, “He who is and who was and who is coming, The Almighty.”`, [
			p(`Principle #29 - since Christ now rules with absolute divine power, the accomplishment of His purposes are guaranteed (vv. 7e-8)`, seriesPart.ELEVEN()),
		]),
	]),
	verse(9, [
		text(`I, John, your brother and companion in the tribulation and kingdom and endurance in Christ Jesus, was on the island called Patmos on account of the Word of God and on account of the testimony of Jesus Christ.`, [
			p(`Principle #30 - The tribulation (τῇ θλίψει) had already begun when John wrote the book and John shared (κοινωνὸς) this experience of tribulation and endurance with the first century churches. We must distinguish between`, seriesPart.TWELVE()),
			p(`Principle #31 - The kingdom had already begun when John wrote the book, and kingdom, tribulation, and endurance coexisted side by side. Yet there are aspects of the kingdom that are still future (Rev. 12:10)`, seriesPart.THIRTEEN()),
			p(`Principle #32 - This book is not just about Jesus (principle 2), but shows how life must flow from Jesus ("in Christ Jesus" - see verses 12ff).`, seriesPart.FOURTEEN()),
			p(`Reiteration of Principle #13 - John's imprisonment on Patmos was because of His commitment to the Old Testament and to the covenant lawsuit of Jesus recorded in the Gospels`, seriesPart.FOURTEEN()),
			p(`Supporting evidence for Principle #12 (v. 9c) - John's tribulation on Patmos came from the Romans and not just from the Jews.`, seriesPart.FOURTEEN()),
		]),
	]),
	verse(10, [
		text(`I was in spirit on the Lord’s day and I heard a voice behind me, loud as a trumpet,`, [
			p(`Reiteration of Principle #3 - This book was inspired or moved by the Spirit ("in the Spirit") and not the product of human will (cf. 2 Pet. 1:21; 1 Thes. 2:13)`, seriesPart.FOURTEEN()),
			p(`Principle #33 - The vision took place "on" the Lord's Day (Sunday) rather than being a vision "about" the Lord's Day (end of history - as is believed by some futurists)`, seriesPart.FOURTEEN()),
		]),
	]),
	verse(11, [
		text(`saying, “Write what you see in a book and send it to the seven churches: to Ephesus, to Smyrna, to Pergamos, to Thyatira, to Sardis, to Philadelphia and to Laodicea.”`, [
			p(`Supporting evidence for Principles #12, 19, & 22`, seriesPart.FOURTEEN()),
		]),
	]),
]

export default flatMap(({ number, texts }) => {
	const principleRows = flatMap(makeTextIntoPrincipleRows, texts)

	const [ firstPrincipleRow, ...restOfPrincipleRows ] = principleRows

	const verseNumberColumn = {
		height: principleRows.length,
		text: number,
		style: 'text-align: center;',
	}

	return [
		[ verseNumberColumn, ...firstPrincipleRow ],
		...restOfPrincipleRows,
	]
}, verses)


function makeTextIntoPrincipleRows(verseTextObject) {
	const { text, principles } = verseTextObject

	const verseTextColumn = {
		height: principles.length,
		text,
	}

	const [ firstPrincipleRow, ...restOfPrincipleRows ] = principles.map(makePrincipleRow)

	return [
		[ verseTextColumn, ...firstPrincipleRow ],
		...restOfPrincipleRows,
	]
}

function makePrincipleRow({ principle, sermon }) {
	const principleColumn = { height: 1, text: principle }

	return sermon
		? [ principleColumn, { height: sermon.principleCount, sermonAudioId: sermon.audioId }]
		: [ principleColumn ]
}

// console.log(JSON.stringify(tableData, null, '\t'))
