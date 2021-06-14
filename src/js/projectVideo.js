const QueryString = window.location.search
console.log(QueryString)
const urlParams = new URLSearchParams(QueryString)
console.log(urlParams)
const vidIDParam = urlParams.get('vidId')
console.log(vidIDParam)