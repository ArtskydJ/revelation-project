const fs = require('fs/promises')
const Retrieval = require('noddity-fs-retrieval')

module.exports = (rootDir, fileFilter) => {
	const { getPost } = Retrieval(rootDir)

	const getIndex = cb => fs.readdir(rootDir, { withFileTypes: true })
		.then(dirents => {
			const files = dirents.filter(dirent => dirent.isFile()).map(({ name }) => name)
			if (fileFilter) {
				files = files.filter(fileFilter)
			}
			return files
		})
		.then(cb.bind(cb, null), cb)

	return {
		getIndex,
		getPost,
	}
}
