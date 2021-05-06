/*
How to use this...
1. Choose a sermon series. E.g. Life of David
2. Download the sermonaudio.rss file for that series
3. Download the dcc.rss file for that series (This might help: https://www.josephdykstra.com/dcc-podcast-feeds)
	cd ...revelation-project/sermon-text-and-audio-correlater
	curl "" > dcc.rss
4. Make sure the constants below are set correctly for the series
*/

const kc_series_path = `KayserCommentary/Markdown/Web/Sermons/LifeOfDavid`
const dcc_rss_url = `http://www.dominioncovenantchurch.com/?podcast&series=12`
const sermonaudio_rss_url = `https://rss.sermonaudio.com/rss_search.rss?seriesonly=true&sourceid=dominioncovenant&keyword=Life+of+David`

const validatePost = post => post.metadata.published
	// && !/GraphicsCharts/.test(post.filename)


// Don't change below this
// ------------------------------------------------------

require(`loud-rejection`)()

const Butler = require(`noddity-butler`)
const level = require(`level-mem`)
const Retrieval = require(`./noddity-flat-fs-retrieval.js`)
const denodeify = require(`then-denodeify`)
const path = require(`path`)
const fs = require(`fs/promises`)
const sh = require(`shell-tag`)

const compareDateAsc = require(`date-fns/compare_asc`)
const formatDate = require('date-fns/format')


const retrieval = Retrieval(path.join(__dirname, `..`, `..`, kc_series_path))
const butler = Butler(retrieval, level(`server`), {
	parallelPostRequests: 10,
})

const getPosts = denodeify(butler.getPosts)

async function main() {
	const padAmount = 70
	const get_rss_feed = require('./get-rss-feed.js')
	const dccRssData = await get_rss_feed(dcc_rss_url)
	const sermonaudioRssData = await get_rss_feed(sermonaudio_rss_url)
	const posts = await getPosts()
	console.log(`got source files`)

	const rssTitles = dccRssData
		.map(({ id, title, dateString, enclosure }) => formatDate(dateString, 'YYYY-MM') + ' ' + normalize(title)) // .padEnd(padAmount) + dateString
		.reverse()

	const validPostTitles = posts
		.filter(validatePost)
		.map(({ filename, metadata }) => {
			const { passage, date, title } = metadata
			return {
				title,
				passage,
				filename,
				date,
			}
		})
		.sort((postA, postB) => compareDateAsc(postA.date, postB.date))
		.map(({ title, filename, date }) => formatDate(date, 'YYYY-MM') + ' ' + normalize(title || `NO TITLE FOR FILE: "${filename}"`))

	await fs.writeFile('markdown-posts.txt', validPostTitles.map(normalize).join('\n'), { encoding: 'utf-8' })
	await fs.writeFile('feed-items.txt', rssTitles.map(normalize).join('\n'), { encoding: 'utf-8' })
	console.log(`wrote output files`)

	// TODO
	// get the sermon IDs from the RSS feed, and insert them into the files' metadata
	// This will have to run after both sides line up nicely with each other
}

main()

const normalize = str => str
	// .replace(/^he /, `The `)
	.replace(/&/g, `and`)
	.replace(/Pt\.?/g, `Part`)
	// .toLowerCase()
	.replace(/([- ][a-z])/g, (_, x) => x.toUpperCase())
	// .replace(`sin and rebellion`, `sin`)
	.replace(/[",]/g, ``)


/*

*/