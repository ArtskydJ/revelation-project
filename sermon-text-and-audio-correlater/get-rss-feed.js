const fs = require('fs/promises')
const got = require('got')
const crypto = require('crypto')
const denodeify = require(`then-denodeify`)
const parse = denodeify(require('xml2js').parseString)
const formatDate = require('date-fns/format')

const linkIdRegex = /^http:\/\/www.dominioncovenantchurch.com\/sermons\/\?sermon_id=(\d+)$/

module.exports = async rss_url => {
	let filename = crypto.createHash('md5').update(rss_url).digest('hex') + '.rss'
	let rss = ''
	try {
		rss = await fs.readFile(filename, { encoding: 'utf-8' })
	} catch (_) {
		rss = (await got(rss_url)).body
		await fs.writeFile(filename, rss, { encoding: 'utf-8' })
	}

	const result = await parse(rss)
	const items = result.rss.channel[0].item
	const pkSermons = items.filter(
		record => record.category[0] === 'Sermon'
			&& record['itunes:author'][0] === 'Phillip Kayser, PhD'
	)

	return pkSermons.map(({ link, title, pubDate, enclosure }) => {
		return {
			title: title[0],
			dateString: formatDate(new Date(pubDate[0]), 'YYYY-MM-DD'),
			link: link[0],
			id: parseInt(link[0].match(linkIdRegex)[1], 10),
			enclosure: enclosure[0]['$'],
		}
	})
}
