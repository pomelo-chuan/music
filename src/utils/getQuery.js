import querystring from 'querystring';

function getQuery() {
    return querystring.parse(window.location.search.replace('?', ''));
}

export default getQuery;
